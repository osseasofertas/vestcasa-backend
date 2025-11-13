# 🚀 Passo a Passo: Criar Repositório Separado para Backend

## Situação Atual
Você está na pasta `backend`, mas o Git está conectado ao repositório da pasta pai (`vestcasa`). Vamos criar um repositório **SEPARADO** apenas para o backend.

---

## ✅ PASSO 1: Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. **Repository name:** `vestcasa-backend`
3. **Description:** `Backend NestJS para Clube Vestcasa`
4. **Visibility:** ✅ **Private** (muito importante!)
5. **NÃO marque:**
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Clique em **"Create repository"**
7. **COPIE A URL** que aparece (exemplo: `https://github.com/osseasofertas/vestcasa-backend.git`)

---

## ✅ PASSO 2: Executar Comandos no PowerShell

Abra o PowerShell na pasta `backend` e execute **UM POR VEZ**:

```powershell
# 1. Garantir que está na pasta backend
cd C:\Users\Romano\Desktop\personal-projects\vestcasa\backend

# 2. Inicializar novo repositório Git (apenas nesta pasta)
git init

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer commit inicial
git commit -m "Initial commit: Backend NestJS para Clube Vestcasa"

# 5. Adicionar remote (SUBSTITUA pela URL do seu repositório)
git remote add origin https://github.com/osseasofertas/vestcasa-backend.git

# 6. Renomear branch para main
git branch -M main

# 7. Fazer push
git push -u origin main
```

---

## ✅ PASSO 3: Se Pedir Autenticação

Quando executar `git push`, pode pedir login:

1. **Username:** `osseasofertas`
2. **Password:** Use um **Personal Access Token** (não sua senha do GitHub)

### Como criar Personal Access Token:

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** `vestcasa-backend-deploy`
4. **Expiration:** Escolha uma data (ex: 90 dias)
5. **Scopes:** Marque apenas **`repo`** (todos os sub-itens serão marcados automaticamente)
6. Clique em **"Generate token"**
7. **COPIE O TOKEN** (você só verá uma vez!)
8. Use este token como senha quando o Git pedir

---

## ✅ PASSO 4: Verificar

1. Acesse: **https://github.com/osseasofertas/vestcasa-backend**
2. Verifique se todos os arquivos aparecem
3. Confirme que está marcado como **"Private"** 🔒

---

## ✅ PASSO 5: Conectar na Railway

1. Acesse: **https://railway.app**
2. Faça login (se já estiver conectado com GitHub, use a mesma conta)
3. Clique em **"New Project"**
4. Selecione **"Deploy from GitHub repo"**
5. Autorize o Railway (se necessário)
6. Selecione o repositório **`vestcasa-backend`**
7. Clique em **"Deploy Now"**

---

## ⚠️ Importante

- O repositório do backend será **SEPARADO** do repositório principal
- Os arquivos do frontend (`cart/`) continuarão no repositório principal
- Isso permite deploy independente de cada parte

---

## 🔧 Se Der Erro

### Erro: "repository not found"
- Verifique se o repositório existe no GitHub
- Confirme que está usando a conta `osseasofertas`
- Verifique se o repositório está privado (pode precisar de permissão)

### Erro: "authentication failed"
- Use Personal Access Token em vez de senha
- Certifique-se de que o token tem permissão `repo`

### Erro: "remote origin already exists"
- Execute: `git remote remove origin`
- Depois execute novamente: `git remote add origin <URL>`

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub (privado)
- [ ] Git inicializado na pasta backend
- [ ] Arquivos commitados
- [ ] Remote adicionado
- [ ] Push realizado com sucesso
- [ ] Repositório visível no GitHub
- [ ] Conectado na Railway

---

## 🎉 Pronto!

Agora você tem um repositório privado separado para o backend!

**Próximo passo:** Configure o banco de dados e variáveis de ambiente na Railway seguindo o guia `DEPLOY.md`.

