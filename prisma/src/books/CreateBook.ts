import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function CreateBooks() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.books.create({
      data: {
        name: "Arquitetura limpa",
        author_id: "5a7bdf8e-7fef-48cb-8139-fb06c1c19726",
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
