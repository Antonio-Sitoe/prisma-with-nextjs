import { NextResponse } from "next/server";
import { create_teacher } from "../../../../prisma/src/teacher/create";

export async function GET(request: Request, response: Response) {}

export async function POST(request: Request, response: Response) {
  try {
    const { data } = await request.json();
    const res = await create_teacher(data);

    return NextResponse.json({
      message: "Professor criado com sucesso",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({ message: "Ocorreu um erro ao criar" });
  }
}
