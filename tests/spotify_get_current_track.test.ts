import { describe, it, expect } from 'bun:test'
import { buildServer } from '../src/infrastructure/webserver/elysia.server'
import { initializeSpotifyService, stopSpotifyService } from '../src/infrastructure/webserver/routes/spotify.routes';

describe('GET /api/spotify/current', () => {
  it('should return current track or null', async () => {
    await initializeSpotifyService()
    const app = buildServer()
    const response = await app.handle(new Request('http://localhost/api/spotify/current'))

    expect(response.status).toBe(200)

    const data = await response.json()

    expect(data).toHaveProperty('data')
    expect(data).toHaveProperty('timestamp')
    expect(typeof data.timestamp).toBe('string')

    if (data.data === null) {
      expect(data.data).toBeNull()
    } else {
      expect(typeof data.data.trackId).toBe('string')
      expect(typeof data.data.trackName).toBe('string')
      expect(typeof data.data.artistName).toBe('string')
      expect(typeof data.data.albumName).toBe('string')
      expect(typeof data.data.albumImage).toBe('string')
      expect(typeof data.data.isPlaying).toBe('boolean')
      expect(typeof data.data.currentPositionMs).toBe('number')
      expect(typeof data.data.durationMs).toBe('number')
      expect(typeof data.data.timestamp).toBe('number')
    }
  })
})