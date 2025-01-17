"use client"
import { api } from "@/lib/api";
import { ModalContext } from "@/providers/modal";
import { CustomersProps } from "@/utils/customer.type";
import { TicketProps } from "@/utils/ticket.type";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FiFile, FiCheckSquare } from "react-icons/fi";

interface TicketItemProps {
  ticket: TicketProps;
  customer: CustomersProps | null;
}

export function TicketItem({ customer, ticket }: TicketItemProps) {
  const route = useRouter();
  const { handleModalVisible, setDetailTicket } = useContext(ModalContext)

  function handleOpenModal() {
    handleModalVisible();
    setDetailTicket({
      customer: customer,
      ticket: ticket
    })
  }

  return (
    <>
      <tr className="border-b-2 border-b-gray-900 h-16 bg-zinc-900/70 hover:bg-zinc-900 duration-300">
        <td className="text-left pl-1">{customer?.name}</td>
        <td className="text-left hidden sm:table-cell">{ticket.created_at?.toLocaleDateString("pt-br")}</td>
        <td className="text-left"><span className="bg-red-500 px-2 py-1 rounded">{ticket.status}</span></td>
        <td className="text-left">
          <button onClick={handleOpenModal}>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  )
}