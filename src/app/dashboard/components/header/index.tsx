import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <Container>
      <header className="w-full bg-gray-700 my-4 p-3 rounded flex gap-4 items-center">
        <Link href="/dashboard" className="hover:font-bold duration-300">
          Chamados aberto
        </Link>
        <Link href="/chamadofechado" className="hover:font-bold duration-300">
          Chamados fechado
        </Link>
        <Link href="/dashboard/customer" className="hover:font-bold duration-300">
          Clientes
        </Link>
        <Link href="/open" className="hover:font-bold duration-300">
          Link de clientes abrir chamado
        </Link>
      </header>
    </Container>
  )
}