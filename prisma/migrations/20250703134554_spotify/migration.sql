-- AlterTable
ALTER TABLE "spotify_cache" ADD COLUMN     "currentPositionMs" INTEGER DEFAULT 0,
ADD COLUMN     "durationMs" INTEGER DEFAULT 0;
