import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function find_by_relation() {
  const result = await prisma.coursesModules.findMany({
    include: {
      courses: true,
      modules: true,
    },
  });
  console.log(result);
}
