import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create_fk_teacher() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Prisma",
      duration: 300,
      description: "Lorem ipsum dolor sit amet, consectetur",
      fk_id_teacher: "0e87ef76-e6cf-4ce2-9e89-316b6199ac61",
    },
  });
  console.log(result);
}
