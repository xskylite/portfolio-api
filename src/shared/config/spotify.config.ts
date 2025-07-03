export const SpotifyConfig = () => {
  return {
    clientId: process.env.SPOTIFY_CLIENT_ID || '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    redirectUri: process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/spotify/callback',
    websocketPort: parseInt(process.env.SPOTIFY_WEBSOCKET_PORT || '8080', 10),
  }
}