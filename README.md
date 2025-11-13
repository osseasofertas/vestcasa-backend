# Backend - Clube Vestcasa

Backend NestJS com Prisma e PostgreSQL para gerenciar assinaturas do Clube Vestcasa.

## 🚀 Tecnologias

- NestJS
- Prisma ORM
- PostgreSQL
- TypeScript

## 📦 Instalação

```bash
npm install
```

## 🔧 Configuração

1. Copie `.env.example` para `.env`
2. Configure a `DATABASE_URL` no `.env`
3. Execute as migrações:
   ```bash
   npx prisma migrate dev
   ```

## 🏃 Executar

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## 📝 Scripts

- `npm run build` - Compila o projeto
- `npm run start:dev` - Inicia em modo desenvolvimento
- `npm run start:prod` - Inicia em modo produção
- `npm run prisma:generate` - Gera o Prisma Client
- `npm run prisma:migrate` - Executa migrações
- `npm run prisma:studio` - Abre o Prisma Studio

## 🗄️ Banco de Dados

O banco de dados usa Prisma. Para ver o schema, consulte `prisma/schema.prisma`.

## 📚 API Endpoints

- `POST /subscriptions` - Criar assinatura
- `GET /subscriptions` - Listar todas as assinaturas
- `GET /subscriptions/:id` - Buscar assinatura por ID
- `GET /subscriptions/cpf/:cpf` - Buscar assinatura por CPF

## 🔒 Variáveis de Ambiente

- `DATABASE_URL` - URL de conexão do PostgreSQL
- `PORT` - Porta do servidor (padrão: 3000)
- `NODE_ENV` - Ambiente (development/production)
- `FRONTEND_URL` - URLs do frontend separadas por vírgula

