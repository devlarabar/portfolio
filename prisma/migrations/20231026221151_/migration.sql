/*
  Warnings:

  - You are about to drop the column `image` on the `project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "main_image" TEXT NOT NULL DEFAULT '',
    "images" TEXT NOT NULL DEFAULT '',
    "tools" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "repository" TEXT NOT NULL
);
INSERT INTO "new_project" ("demo", "description", "id", "name", "repository", "tools") SELECT "demo", "description", "id", "name", "repository", "tools" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
