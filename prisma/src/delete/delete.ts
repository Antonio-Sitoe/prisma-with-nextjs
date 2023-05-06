import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function delete_item() {
  try {
    // inserir dado na tabela
    // data - usamos para inserir dados simples
    const result = await prisma.courses.delete({
      where: {
        id: "104766ff-bf51-4e0d-b94d-f5a58c66aad6",
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
