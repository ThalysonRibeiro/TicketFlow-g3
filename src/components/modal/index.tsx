"use client"

import { ModalContext } from "@/providers/modal"
import { useContext, useRef, MouseEvent } from "react"
import { TiKey } from "react-icons/ti";

export function ModalTicket() {
  const { handleModalVisible, ticket } = useContext(ModalContext);
  const modaRef = useRef<HTMLDivElement | null>(null);

  const handleModalCLick = (e: MouseEvent<HTMLDivElement>) => {
    if (modaRef.current && !modaRef.current.contains(e.target as Node)) {
      handleModalVisible();
    }
  }

  return (
    <div className="absolute bg-gray-900/80 w-full min-h-screen" onClick={handleModalCLick}>
      <div className="absolute inset-0 flex items-center justify-center">

        <div ref={modaRef} className="bg-zinc-800 shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">

          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold text-lg md:text-2xl">Detalhes do chamado</h1>
            <button className="bg-red-500 rounded p-1 px-2" onClick={handleModalVisible}>
              Fechar
            </button>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            <h2 className="font-bold">Nome:</h2>
            <p>{ticket?.ticket.name}</p>
          </div>

          <div className="flex flex-wrap flex-col gap-1 mb-2">
            <h2 className="font-bold">Descrição:</h2>
            <p>{ticket?.ticket.description}</p>
          </div>

          <div className="w-full border-[1px] my-4"></div>
          <h1 className="font-bold text-lg mb-4">Detalhes do cliente</h1>

          <div className="flex flex-wrap gap-1 mb-2">
            <h2 className="font-bold">Nome:</h2>
            <p>{ticket?.customer?.name}</p>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            <h2 className="font-bold">Telefone:</h2>
            <p>{ticket?.customer?.phone}</p>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            <h2 className="font-bold">Email:</h2>
            <p>{ticket?.customer?.email}</p>
          </div>
          {ticket?.customer?.address && (
            <div className="flex flex-wrap gap-1 mb-2">
              <h2 className="font-bold">Endereço:</h2>
              <p>{ticket.customer.address}</p>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}