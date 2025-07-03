import { WebSocketServer } from 'ws';
import { SpotifyService } from './spotify.service';
import { SpotifyEntity } from '../../core/entities/spotify.entity';
import { logger } from '../../shared/utils/logger';
import { SpotifyConfig } from '../../shared/config/spotify.config';

const config = SpotifyConfig();

interface SpotifyState {
  trackId: string;
  trackName: string;
  artistName: string;
  albumName: string;
  albumImage: string;
  isPlaying: boolean;
  currentPositionMs: number;
  durationMs: number;
  timestamp: number;
}

export class SpotifyRealtimeService {
  private wss: WebSocketServer;
  private spotifyService: SpotifyService;
  private pollInterval: NodeJS.Timeout | null = null;
  private broadcastInterval: NodeJS.Timeout | null = null;
  private lastKnownState: SpotifyState | null = null;
  private lastApiCall: number = 0;

  constructor() {
    this.wss = new WebSocketServer({ port: config.websocketPort });
    this.spotifyService = new SpotifyService();
    this.setupWebSocket();
    this.startPolling();
    this.startBroadcasting();
  }

  private setupWebSocket() {
    this.wss.on('connection', (ws) => {
      logger.log('Client connected to Spotify WebSocket');
      
      this.sendCurrentState(ws);
      
      ws.on('close', () => {
        logger.log('Client disconnected from Spotify WebSocket');
      });

      ws.on('error', (error) => {
        logger.error('WebSocket error:', error);
      });
    });
  }

  private async fetchSpotifyState() {
    try {
      const currentTrack = await this.spotifyService.getCurrentlyPlaying();
      
      if (!currentTrack) {
        logger.log('No Spotify data received');
        return;
      }

      this.lastKnownState = {
        trackId: currentTrack.trackId ?? '',
        trackName: currentTrack.trackName ?? '',
        artistName: currentTrack.artistName ?? '',
        albumName: currentTrack.albumName ?? '',
        albumImage: currentTrack.albumImage ?? '',
        isPlaying: currentTrack.isPlaying ?? false,
        currentPositionMs: currentTrack.currentPositionMs ?? 0,
        durationMs: currentTrack.durationMs ?? 0,
        timestamp: Date.now()
      };
      
      this.lastApiCall = Date.now();
      
      logger.log(`API called: ${currentTrack.isPlaying ? 'Playing' : 'Paused'} - ${currentTrack.trackName} at ${currentTrack.currentPositionMs}ms`);
      
    } catch (error) {
      logger.error('Error fetching Spotify state:', error);
    }
  }

  private getInterpolatedState(): SpotifyState | null {
    if (!this.lastKnownState) return null;

    const now = Date.now();
    const timeSinceLastUpdate = now - this.lastKnownState.timestamp;
    
    if (this.lastKnownState.isPlaying) {
      const interpolatedPosition = Math.min(
        this.lastKnownState.currentPositionMs + timeSinceLastUpdate,
        this.lastKnownState.durationMs
      );
      
      return {
        ...this.lastKnownState,
        currentPositionMs: interpolatedPosition,
        timestamp: now
      };
    }
    
    return {
      ...this.lastKnownState,
      timestamp: now
    };
  }

  private async sendCurrentState(targetWs?: any) {
    const interpolatedState = this.getInterpolatedState();
    
    if (!interpolatedState) return;

    const clients = targetWs ? [targetWs] : Array.from(this.wss.clients);
    
    clients.forEach(client => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({
          type: 'spotify_update',
          data: interpolatedState
        }));
      }
    });
  }

  private startPolling() {
    logger.log('Starting Spotify API polling every 5 seconds');
    
    this.fetchSpotifyState();
    
    this.pollInterval = setInterval(() => {
      this.fetchSpotifyState();
    }, 5000);
  }

  private shouldUpdateMoreFrequently(): boolean {
    if (!this.lastKnownState) return false;
    
    const timeSinceLastUpdate = Date.now() - this.lastKnownState.timestamp;
    const timeUntilTrackEnd = this.lastKnownState.durationMs - this.lastKnownState.currentPositionMs;
    
    return timeUntilTrackEnd < 10000;
  }

  private startBroadcasting() {
    logger.log('Starting real-time broadcasting every 500ms');
    
    this.broadcastInterval = setInterval(() => {
      const interval = this.shouldUpdateMoreFrequently() ? 250 : 500;
      
      this.sendCurrentState();
      
      if (this.broadcastInterval) {
        clearInterval(this.broadcastInterval);
        this.broadcastInterval = setInterval(() => {
          this.sendCurrentState();
        }, interval);
      }
    }, 500);
  }

  public stop() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      logger.log('Stopped Spotify API polling');
    }
    
    if (this.broadcastInterval) {
      clearInterval(this.broadcastInterval);
      logger.log('Stopped real-time broadcasting');
    }
    
    this.wss.close();
    logger.log('WebSocket server closed');
  }
}