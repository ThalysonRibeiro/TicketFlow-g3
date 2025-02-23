import Image from "next/image";
import heroImg from "@/assets/hero.svg";
import { ReactNode } from "react";
import { FaRegChartBar, FaRegMessage } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";

export default function Home() {
  const data = new Date().getFullYear;

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* <h1 className="font-medium text-2xl mb-2">Gerencie sua empresa</h1> */}
      {/* <h2 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimentos, clientes</h2> */}
      <Image
        src={heroImg}
        alt="Imagem hero de g3 controle"
        width={600}
        className="max-w-sm mt-6 md:max-w-xl"
      />
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
            Simplifique seu suporte ao cliente
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Gerencie tickets de suporte ao cliente de forma eficiente com nossa plataforma poderosa e intuitiva.
            Rastreie, responda e resolva problemas, tudo em um só lugar.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-16">
            Tudo o que você precisa para gerenciar o suporte ao cliente
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<FaRegMessage className="h-8 w-8 text-blue-500" />}
              title="Gestão de Tickets"
              description="Organize e acompanhe todas as consultas dos clientes em um sistema centralizado"
            />
            <FeatureCard
              icon={<FiUsers className="h-8 w-8 text-blue-500" />}
              title="Colaboração em equipe"
              description="Trabalhe em conjunto perfeitamente com ferramentas de comunicação de equipe integradas"
            />
            <FeatureCard
              icon={<FaRegChartBar className="h-8 w-8 text-blue-500" />}
              title="Análises e relatórios"
              description="Obtenha insights sobre o desempenho da sua equipe e a satisfação do cliente"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-16">
            Como funciona o TicketFlow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Receber Tickets"
              description="Reúna consultas de clientes de vários canais em um só lugar"
            />
            <Step
              number="2"
              title="Atribuir e responder"
              description="Encaminhe os tickets para os membros certos da equipe e forneça respostas rápidas"
            />
            <Step
              number="3"
              title="Resolver e rastrear"
              description="Feche os tickets e monitore as métricas de desempenho para melhoria contínua"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LuTicket className="h-6 w-6" />
                <span className="text-xl font-bold text-white">TicketFlow</span>
              </div>
              <p className="text-sm">
                Tornando o gerenciamento de suporte ao cliente simples e eficiente.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Características</a></li>
                <li><a href="#" className="hover:text-white transition">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition">Central de Ajuda</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} TicketFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-zinc-800 rounded-xl shadow-lg border border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="text-center p-6 border border-gray-700 rounded-xl">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-gray-100 font-bold text-xl mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}