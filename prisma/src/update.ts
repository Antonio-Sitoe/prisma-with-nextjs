import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function update() {
  const result = await prisma.courses.update({
    // 1.pegar um registro;
    where: {
      id: "e93fb3d6-d1fe-4ea1-b718-87605ec923cc",
    },
    // 2.atualizar
    data: {
      duration: 123,
      description: "uma coisa muito bela",
      name: "Curso de kotlin",
    },
  });
  console.log(result);
}
