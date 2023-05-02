import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create_exist_teacher() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React nATIVE",
      duration: 300,
      description: "Lorem ipsum dolor sit amet, consectetur",
      teacher: {
        connect: {
          id: "adddc22a-a9f2-4819-8662-8ab331bb1f33",
        },
      },
    },
  });
  console.log(result);
}
