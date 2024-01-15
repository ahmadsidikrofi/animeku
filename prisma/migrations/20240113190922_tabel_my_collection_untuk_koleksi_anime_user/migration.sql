/*
  Warnings:

  - You are about to alter the column `anime_score` on the `mycollection` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `mycollection` MODIFY `anime_score` DOUBLE NOT NULL;
