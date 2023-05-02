import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create_non_exist_teacher() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixer",
      duration: 600,
      description: "Curso de java lorem ipsum dolor",
      teacher: {
        create: {
          name: "Rafa camarda",
        },
      },
    },
  });
  console.log(result);
}
