import { SpotifyEntity } from "../../core/entities/spotify.entity";
import { logger } from "../../shared/utils/logger";
import { SpotifyTokenStorage } from "./spotify-token-storage.service";
import { SpotifyConfig } from "../../shared/config/spotify.config";

const tokens = await SpotifyTokenStorage.read().catch(() => (
  logger.error('Failed to read Spotify tokens from storage.')
));

const config = SpotifyConfig();

export class SpotifyService {
  private accessToken: string = tokens?.access_token || '';
  private refreshToken: string = tokens?.refresh_token || '';
  private clientId: string = config.clientId;
  private clientSecret: string = config.clientSecret;

  async getCurrentlyPlaying(): Promise<SpotifyEntity | null> {
    if (!this.accessToken) {
      await this.refreshAccessToken();
    }

    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      });

      if (response.status === 204) {
        return {
          isPlaying: false,
          trackName: null,
          artistName: null,
          albumName: null,
          albumImage: null,
          trackId: null,
          currentPositionMs: 0,
          durationMs: 0,
          timestamp: Date.now()
        };
      }

      if (!response.ok) {
        if (response.status === 401) {
          await this.refreshAccessToken();
          return this.getCurrentlyPlaying();
        }
        throw new Error(`Spotify API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        trackName: data.item?.name,
        artistName: data.item?.artists?.[0]?.name,
        albumName: data.item?.album?.name,
        albumImage: data.item?.album?.images?.[0]?.url,
        isPlaying: data.is_playing,
        trackId: data.item?.id,
        currentPositionMs: data.progress_ms,
        durationMs: data.item?.duration_ms,
        timestamp: Date.now()
      };
    } catch (error) {
      logger.error('Spotify API error:', error);
      return null;
    }
  }

  async refreshAccessToken(): Promise<string> {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken
      })
    });

    if (!response.ok) {
      throw new Error('Failed to refresh Spotify token');
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token || this.refreshToken;
    await SpotifyTokenStorage.write({
      access_token: this.accessToken,
      refresh_token: this.refreshToken
    }).catch(() => {
      logger.error('Failed to write Spotify tokens to storage.');
    });
    return this.accessToken;
  }
}