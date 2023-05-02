import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

interface create_teacher_Props {
  name: string;
}
export async function create_teacher({ name }: create_teacher_Props) {
  // inserir dado na tabela
  // data - usamos para inserir dados simples
  const result = await prisma.teachers.create({
    data: {
      name: name,
    },
  });

  if (result) {
    return result;
  } else {
    return "O campo ja tem esse nome";
  }
}
