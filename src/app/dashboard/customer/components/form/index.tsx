"use client"

import { Input } from "@/components/input";
import { api } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "O campo é obtrigatório."),
  email: z.string().email("Digite um email valido.").min(1, "O email é obrigatório."),
  phone: z.string().refine((value) => {
    return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{11}$/.test(value)
  }, {
    message: "O numero de telefone de estar (DD) 999999999"
  }),
  address: z.string(),
})
type FormeData = z.infer<typeof schema>

export function NewCustomerForm({ userId }: { userId: string }) {

  const { register, handleSubmit, formState: { errors } } = useForm<FormeData>({
    resolver: zodResolver(schema)
  })


  const router = useRouter();

  async function handleRegisterCustomer(data: FormeData) {
    await api.post("/api/customer", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      userId: userId
    })
    router.refresh();
    router.replace("/dashboard/customer")
  }

  return (
    <form className="flex flex-col mt-6 text-black" onSubmit={handleSubmit(handleRegisterCustomer)}>
      <label className="mb-1 text-lg text-medium">Nome completo:</label>
      <Input
        type="text"
        name="name"
        placeholder="DIgite o nome ocmpleto"
        error={errors.name?.message}
        register={register}
      />
      <section className="flex gap-2 my-2 flex-col sm:flex-row">
        <div className="flex-1">
          <label className="mb-1 text-lg text-medium">Telefone:</label>
          <Input
            type="text"
            name="phone"
            placeholder="Exemplo (DD) 999999999"
            error={errors.phone?.message}
            register={register}
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg text-medium">Email:</label>
          <Input
            type="email"
            name="email"
            placeholder="Digite o email..."
            error={errors.email?.message}
            register={register}
          />
        </div>
      </section>

      <label className="mb-1 text-lg text-medium">Endereço completo:</label>
      <Input
        type="text"
        name="address"
        placeholder="DIgite o endereço ocmpleto"
        error={errors.address?.message}
        register={register}
      />
      <button
        className="bg-blue-500 text-white my-4 px-2 h-11 rounded font-bold"
        type="submit"
      >
        Cadastrar
      </button>

    </form>
  )
}