/*
  Warnings:

  - A unique constraint covering the columns `[location,lang]` on the table `weather_cache` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "weather_cache_location_key";

-- CreateIndex
CREATE UNIQUE INDEX "weather_cache_location_lang_key" ON "weather_cache"("location", "lang");
