import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function create_pagination() {
  let skip = 0;
  let exist = true;
  while (exist) {
    const result = await prisma.courses.findMany({
      skip: skip,
      take: 2,
    });
    skip += 2;

    if (result.length <= 0) exist = false;
    console.log(result);
    console.log("--------------");
  }
}
