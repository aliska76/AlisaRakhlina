-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "number_of_rooms" INTEGER NOT NULL DEFAULT 0,
    "price" REAL NOT NULL,
    "floor" INTEGER,
    "contact" TEXT NOT NULL,
    CONSTRAINT "Property_id_fkey" FOREIGN KEY ("id") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER
);
