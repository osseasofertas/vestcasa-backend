# 🚂 Deploy do Backend na Railway

## Passo a Passo Detalhado

### 1. Criar Conta e Projeto

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em **"New Project"**
4. Selecione **"Deploy from GitHub repo"**
5. Escolha seu repositório

### 2. Configurar o Serviço

1. Railway detectará automaticamente que é um projeto Node.js
2. Selecione a pasta `backend` como **Root Directory** (se necessário)

### 3. Adicionar Banco de Dados

1. No mesmo projeto, clique em **"New"** → **"Database"** → **"PostgreSQL"**
2. Aguarde o banco ser criado
3. Vá na aba **"Variables"** do banco
4. Copie a **Connection String** (formato: `postgresql://...`)

### 4. Configurar Variáveis de Ambiente do Backend

No serviço do backend, vá em **"Variables"** e adicione:

```env
DATABASE_URL=postgresql://postgres:senha@host:5432/railway
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://clubevestcasa.com.br,https://vestcasa.vercel.app
```

**Importante:** Substitua `DATABASE_URL` pela connection string do banco que você copiou.

### 5. Configurar Build e Start

Na aba **"Settings"**:

- **Build Command:**
  ```
  npm ci && npm run build && npx prisma generate
  ```

- **Start Command:**
  ```
  npm run start:prod
  ```

### 6. Executar Migrações

Após o primeiro deploy, execute as migrações:

**Opção 1 - Via Railway CLI:**
```bash
npm install -g @railway/cli
railway login
railway link
railway run npx prisma migrate deploy
```

**Opção 2 - Via Dashboard:**
1. Vá em **"Deployments"**
2. Clique nos três pontos do último deploy
3. Selecione **"View Logs"**
4. Use o terminal integrado para executar: `npx prisma migrate deploy`

### 7. Obter URL Pública

1. Vá em **"Settings"** do serviço backend
2. Ative **"Generate Domain"** ou configure um domínio customizado
3. Copie a URL (exemplo: `https://vestcasa-backend.up.railway.app`)

### 8. Testar

Acesse: `https://sua-url.railway.app/subscriptions`

Deve retornar: `[]` (array vazio) ou dados se já houver.

---

## 🔧 Comandos Úteis

```bash
# Ver logs
railway logs

# Executar comando no ambiente Railway
railway run <comando>

# Abrir shell interativo
railway shell
```

---

## ⚠️ Problemas Comuns

### Erro: "Cannot connect to database"
- Verifique se `DATABASE_URL` está correta
- Certifique-se de que o banco está no mesmo projeto
- Verifique se o banco está rodando

### Erro: "Prisma Client not generated"
- Execute: `railway run npx prisma generate`
- Ou adicione `prisma generate` no build command

### Erro: "Migration not applied"
- Execute: `railway run npx prisma migrate deploy`

