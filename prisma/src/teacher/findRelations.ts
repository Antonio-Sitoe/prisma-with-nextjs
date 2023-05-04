import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function findRelations() {
  const result = await prisma.courses.findMany({
    include: {
      teacher: true,
    }, // incluir as informacoes do professor
  });
  console.log(result);
}
