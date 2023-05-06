import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function finde_by_course() {
  const result = await prisma.courses.findMany({
    include: {
      courses_modules: true,
    },
  });
  console.log(result);
}
