/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `journal` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Article` table. All the data in the column will be lost.
  - Added the required column `createDate` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagenUrl` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `magazine` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Article` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
DROP COLUMN "journal",
DROP COLUMN "year",
ADD COLUMN     "createDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "imagenUrl" TEXT NOT NULL,
ADD COLUMN     "magazine" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("id");
