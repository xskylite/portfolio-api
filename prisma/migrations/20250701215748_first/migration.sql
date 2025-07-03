-- CreateEnum
CREATE TYPE "ProjectCategory" AS ENUM ('PERSONAL', 'ORDER', 'OPENSOURCE');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FRONTEND', 'BACKEND', 'BOTS');

-- CreateEnum
CREATE TYPE "SkillCategory" AS ENUM ('ALL', 'FRONTEND', 'BACKEND', 'DEVOPS');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "version" TEXT,
    "website" TEXT,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "isReceivingUpdates" BOOLEAN NOT NULL DEFAULT false,
    "isInProduction" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "previewImage" TEXT,
    "category" "ProjectCategory" NOT NULL,
    "type" "ProjectType" NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_technologies" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "version" TEXT,

    CONSTRAINT "project_technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "category" "SkillCategory" NOT NULL,
    "isActiveUse" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weather_cache" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "temp_c" DOUBLE PRECISION NOT NULL,
    "temp_f" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "conditionCode" INTEGER NOT NULL,
    "humidity" INTEGER,
    "windSpeed" DOUBLE PRECISION,
    "cachedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weather_cache_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spotify_cache" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL DEFAULT 'user',
    "trackName" TEXT,
    "artistName" TEXT,
    "albumName" TEXT,
    "albumImage" TEXT,
    "isPlaying" BOOLEAN NOT NULL DEFAULT false,
    "trackId" TEXT,
    "cachedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "spotify_cache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "weather_cache_location_key" ON "weather_cache"("location");

-- CreateIndex
CREATE UNIQUE INDEX "spotify_cache_userId_key" ON "spotify_cache"("userId");

-- AddForeignKey
ALTER TABLE "project_technologies" ADD CONSTRAINT "project_technologies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_technologies" ADD CONSTRAINT "project_technologies_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
