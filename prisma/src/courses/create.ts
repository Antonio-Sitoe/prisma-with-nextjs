import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createDataWithRelationship() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de JavaFx",
      duration: 2000,
      description: "Curso de java lorem ipsum dolor",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Edilson Sitoe",
          },
          create: {
            name: "Edilson Sitoe",
          },
        },
      },
    },
  });
  console.log(result);
}
