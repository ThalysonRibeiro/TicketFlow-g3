import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismaCliente from "@/lib/prisma";
import { string } from "zod";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { id } = await request.json();

  const findTicket = await prismaCliente.ticket.findFirst({
    where: {
      id: id as string
    }
  })

  if (!findTicket) {
    return NextResponse.json({ error: "Failed updade ticket" }, { status: 400 })
  }

  try {
    await prismaCliente.ticket.update({
      where: {
        id: id as string
      },
      data: {
        status: "FECHADO"
      }
    })

    return NextResponse.json({ message: "Chamado atualizado com sucesso!" })
  } catch (error) {
    return NextResponse.json({ error: "Failed updade ticket" }, { status: 400 })

  }
}


export async function POST(request: Request) {
  const { customerId, name, description } = await request.json();
  if (!customerId || !name || !description) {
    return NextResponse.json({ error: "Failed created new ticket" }, { status: 400 });
  }

  try {
    await prismaCliente.ticket.create({
      data: {
        name: name,
        description: description,
        status: "ABERTO",
        customerId: customerId,
      }
    })

    return NextResponse.json({ message: "Chamado cadastrado com sucesso!" });


  } catch (error) {
    return NextResponse.json({ error: "Failed created new ticket" }, { status: 400 });

  }

}