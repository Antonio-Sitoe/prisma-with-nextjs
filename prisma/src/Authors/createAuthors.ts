import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function CreateAuthors() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.authors.create({
      data: {
        name: "Delcio Tevinh",
        books: {
          create: {
            name: "Paito",
          },
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
