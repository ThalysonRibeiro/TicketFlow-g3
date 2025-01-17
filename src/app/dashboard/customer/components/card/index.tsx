"use client"
import { api } from "@/lib/api";
import { CustomersProps } from "@/utils/customer.type";
import { useRouter } from "next/navigation";

export function CardCUstomer({ customer }: { customer: CustomersProps }) {
  const router = useRouter();

  async function handleDeleCustomer() {
    try {
      await api.delete("/api/customer", {
        params: {
          id: customer.id
        }
      })

      router.refresh();

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <article className="flex flex-col p-2 bg-zinc-900/70 border-2 border-gray-800 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2>
        <a className="font-bold">Nome: </a>{customer.name}
      </h2>
      <p><a className="font-bold">Email: </a>{customer.email}</p>
      <p><a className="font-bold">Telefone: </a>{customer.phone}</p>
      <button
        className="bg-red-500 rounded px-4 mt-2 self-start"
        onClick={handleDeleCustomer}
      >
        Deletar
      </button>
    </article>
  )
}