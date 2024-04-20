-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "images" TEXT NOT NULL DEFAULT '',
    "tools" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_project" ("demo", "description", "id", "image", "images", "name", "repository", "tools") SELECT "demo", "description", "id", "image", "images", "name", "repository", "tools" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
