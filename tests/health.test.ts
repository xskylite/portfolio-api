import { describe, it, expect } from 'bun:test'
import { buildServer } from '../src/infrastructure/webserver/elysia.server'

describe('GET /api/health', () => {
  it('should return status ok and version 1.0.0', async () => {
    const app = buildServer()
    const response = await app.handle(new Request('http://localhost/api/health'))

    expect(response.status).toBe(200)

    const data = await response.json()

    expect(data.status).toBe('ok')
    expect(data.version).toBe('1.0.0')
    expect(typeof data.uptime).toBe('number')
    expect(typeof data.timestamp).toBe('string')
  })
})
