import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.courses.create({
      data: {
        name: "Curso de Nodejs",
        duration: 200,
        description: "Curso de Node de Ignite",
      }, // instrucao simples
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
