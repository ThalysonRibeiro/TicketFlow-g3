# TicketFlow

Sistema de gerenciamento de chamados para controle e acompanhamento de atendimentos a clientes.

## 📋 Sobre o Projeto

TicketFlow é uma solução completa para gerenciamento de chamados técnicos, permitindo cadastrar clientes e acompanhar os chamados de cada um deles. Com uma interface intuitiva e funcionalidades robustas, o sistema facilita o controle do fluxo de atendimento e melhora a eficiência de sua equipe.

## ✨ Funcionalidades

- **Cadastro de Clientes**: Registre informações completas de seus clientes
- **Gerenciamento de Chamados**: Crie, atualize e acompanhe o status dos chamados
- **Histórico de Atendimentos**: Visualize o histórico de chamados
- **Autenticação de Usuários**: Sistema seguro
- **Interface Responsiva**: Acesse o sistema de qualquer dispositivo

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React para desenvolvimento web
- **React 19**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset JavaScript com tipagem estática
- **Prisma**: ORM para acesso ao banco de dados
- **Mongodb**: Bacndo de dados
- **NextAuth**: Sistema de autenticação e autorização
- **Tailwind CSS**: Framework CSS para estilização
- **Zod**: Validação de esquemas de dados
- **React Hook Form**: Gerenciamento de formulários

## 🔧 Requisitos

- Node.js 18 ou superior
- NPM ou Yarn
- Banco de dados (Mongodb)

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario//TicketFlow-g3.git
   cd ticketflow
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações.
   
   ```.env
   DATABASE_URL=url do banco
   NODE_ENV==developdment
   NEXTAUTH_URL=http://localhost:3000/
   HOST_UR=http://localhost:3000/
   NEXTAUTH_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```




5. Configure o banco de dados:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

7. Acesse `http://localhost:3000` no seu navegador.


## 🔒 Autenticação

O sistema utiliza NextAuth para autenticação, suportando:
- Autenticação OAuth (Google)

## 🧩 Fluxo de Trabalho

1. Cadastro de clientes no sistema
2. Abertura de chamados pelos clientes ou pela equipe interna
3. Atribuição de técnicos responsáveis
4. Acompanhamento e atualização do status do chamado

## 📝 Próximas Funcionalidades

- [ ] Módulo de relatórios avançados
- [ ] Integração com sistemas de mensageria
- [ ] Aplicativo mobile
- [ ] Chat em tempo real

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para detalhes.
