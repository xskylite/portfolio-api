import { Elysia } from 'elysia';
import { SpotifyRealtimeService } from '../../services/spotify-realtime.service';
import { logger } from '../../../shared/utils/logger';

let spotifyRealtimeService: SpotifyRealtimeService | null = null;

export const initializeSpotifyService = async () => {
  if (!spotifyRealtimeService) {
    logger.info('Starting Spotify services...');
    spotifyRealtimeService = new SpotifyRealtimeService();
    await spotifyRealtimeService.initialize();
    logger.info('Spotify service initialized successfully');
  }
};

export const stopSpotifyService = () => {
  if (spotifyRealtimeService) {
    logger.info('Stopping Spotify WebSocket service...');
    spotifyRealtimeService.stop();
    spotifyRealtimeService = null;
    logger.info('Spotify service stopped');
  }
};

export const SpotifyRoutes = new Elysia({ prefix: '/api/spotify' })
  .ws('/', {
    open(ws) {
      if (!spotifyRealtimeService) {
        logger.warn('Spotify service not initialized yet');
        ws.send(JSON.stringify({ 
          type: 'error',
          message: 'Spotify service not ready',
          timestamp: Date.now()
        }));
        return;
      }

      spotifyRealtimeService.addClient(ws);
      
      ws.send(JSON.stringify({ 
        type: 'connection',
        message: 'Connected to Spotify WebSocket',
        timestamp: Date.now()
      }));
    },
    
    message(ws, message) {
      if (!spotifyRealtimeService) return;
      
      logger.log('Received WebSocket message:', message);
      
      try {
        const data = JSON.parse(message as string);
        
        switch (data.type) {
          case 'ping':
            ws.send(JSON.stringify({ 
              type: 'pong', 
              timestamp: Date.now() 
            }));
            break;
          
          case 'get_status':
            ws.send(JSON.stringify({
              type: 'status',
              connected_clients: spotifyRealtimeService.getConnectedClientsCount(),
              timestamp: Date.now()
            }));
            break;
            
          default:
            ws.send(JSON.stringify({ 
              type: 'error',
              message: 'Unknown message type',
              timestamp: Date.now()
            }));
        }
      } catch (error) {
        logger.error('Error parsing WebSocket message:', error);
        ws.send(JSON.stringify({ 
          type: 'error',
          message: 'Invalid JSON format',
          timestamp: Date.now()
        }));
      }
    },
    
    close(ws) {
      if (!spotifyRealtimeService) return;
      
      logger.log('WebSocket connection closed');
      spotifyRealtimeService.removeClient(ws);
    },
    
    error(context) {
      logger.error('WebSocket error:', context.error || context);
    }
  })
  .get('/stats', () => {
    if (!spotifyRealtimeService) {
      return { 
        error: 'Spotify service not initialized',
        connected_clients: 0,
        timestamp: new Date().toISOString()
      };
    }
    
    return {
      connected_clients: spotifyRealtimeService.getConnectedClientsCount(),
      timestamp: new Date().toISOString()
    };
  })
  .get('/current', async () => {
    if (!spotifyRealtimeService) {
      return { 
        error: 'Spotify service not initialized',
        timestamp: new Date().toISOString()
      };
    }

    const currentTrack = await spotifyRealtimeService.getCurrentTrack();
    return {
      data: currentTrack,
      timestamp: new Date().toISOString()
    };
  });