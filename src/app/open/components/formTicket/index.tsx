"use client"
import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { CustomerDataInfo } from "../../page";


const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório."),
  description: z.string().min(1, "Descreva um pouco sobre seu chamado")
})

type FormData = z.infer<typeof schema>

interface FormeTicketProps {
  customer: CustomerDataInfo;
}

export function FormTicket({ customer }: FormeTicketProps) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  async function handleRegisterTicket(data: FormData) {
    const response = await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      customerId: customer.id
    })
    setValue("name", "");
    setValue("description", "");

  }

  return (
    <form className="bg-zinc-800 mt-6 px-4 py-6 rounded  text-black" onSubmit={handleSubmit(handleRegisterTicket)}>
      <label className="mb-1 font-medium text-lg text-white">Nome do chamado</label>
      <Input
        register={register}
        type="text"
        placeholder="Digite o nome do chamado"
        name="name"
        error={errors.name?.message}
      />

      <label className="mb-1 font-medium text-lg text-white">Nome do chamado</label>
      <textarea
        className="w-full rounded-md h-24 resize-none px-2"
        placeholder="Descreva o seu problema"
        id="description"
        {...register("description")}
      ></textarea>
      {errors.description?.message && <p className="text-red-500 mt-1 mb-4">{errors.description.message}</p>}

      <button className="bg-blue-500 rounded-md w-full h-11 px-2 font-bold text-white" type="submit">
        Cadastrar
      </button>
    </form>
  )
}