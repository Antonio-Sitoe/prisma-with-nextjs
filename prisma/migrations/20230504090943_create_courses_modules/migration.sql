-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fk_id_courses" TEXT NOT NULL,
    "fk_id_modules" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coursesId" TEXT NOT NULL,
    CONSTRAINT "courses_modules_fk_id_courses_fkey" FOREIGN KEY ("fk_id_courses") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "courses_modules_fk_id_modules_fkey" FOREIGN KEY ("fk_id_modules") REFERENCES "modules" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
