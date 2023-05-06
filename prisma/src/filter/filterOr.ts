import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function filterOr() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.courses.findMany({
      where: {
        AND: {
          duration: 300,
        },
        OR: [
          {
            name: {
              contains: "react",
            },
          },
          // {
          //   name: {
          //     contains: "prisma",
          //   },
          // },
        ],
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
