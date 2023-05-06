import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create_modules() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendodo firebase do zero",
      courses_modules: {
        create: {
          courses: {
            connect: {
              id: "18b8b8e1-d1fc-485a-b17f-a032212ded66",
            },
          },
        },
      },
    },
  });
}
