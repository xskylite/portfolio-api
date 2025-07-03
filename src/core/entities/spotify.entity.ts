export interface SpotifyEntity {
  trackName: string | null;
  artistName: string | null;
  albumName: string | null;
  albumImage: string | null;
  isPlaying: boolean | null;
  trackId: string | null;
  currentPositionMs?: number | null;
  durationMs?: number | null;

  timestamp: number | null;
}