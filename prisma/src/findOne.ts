import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findOne() {
  // buscar pelo primeiro apenas
  const firstCourse = await prisma.courses.findFirst();
  // o ultimo registro baseado na data de criacao
  const latest = await prisma.courses.findFirst({
    take: -1,
  });
  console.log(latest);
}
