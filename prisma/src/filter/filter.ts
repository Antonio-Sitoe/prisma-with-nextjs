import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function filter_StartWith() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.courses.findMany({
      where: {
        name: {
          startsWith: "r", // exatamente
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
