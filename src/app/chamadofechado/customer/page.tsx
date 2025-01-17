import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CardCUstomer } from "./components/card";
import PrismaClient from "@/lib/prisma";

export default async function Customer() {

  const seeion = await getServerSession(authOptions);

  if (!seeion || !seeion.user) {
    redirect("/");
  }

  const customers = await PrismaClient.customer.findMany({
    where: {
      userId: seeion.user.id
    }
  })

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 px-4 py-1 rounded">
            Novo Cliente
          </Link>
        </div>

        <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2">
          {customers.map((customer) => (
            <CardCUstomer
              key={customer.id}
              customer={customer}
            />
          ))}
        </section>

        {customers.length === 0 && (
          <h1 className="text-gray-600">Você ainda não possue nenhum cliente.</h1>
        )}

      </main>
    </Container>
  )
}