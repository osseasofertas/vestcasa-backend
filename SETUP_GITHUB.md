# 🚀 Configurar Backend no GitHub (Repositório Privado)

## Passo a Passo Rápido

### 1. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name:** `vestcasa-backend`
3. **Description:** `Backend NestJS para Clube Vestcasa`
4. **Visibility:** ✅ **Private**
5. **NÃO marque** nenhuma opção (README, .gitignore, license)
6. Clique em **"Create repository"**

### 2. Copiar a URL do Repositório

Após criar, copie a URL que aparece, será algo como:
```
https://github.com/osseasofertas/vestcasa-backend.git
```

### 3. Executar os Comandos Abaixo

Abra o PowerShell na pasta `backend` e execute:

```powershell
# Navegar para a pasta backend
cd backend

# Inicializar git (se ainda não estiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Backend NestJS para Clube Vestcasa"

# Adicionar remote (SUBSTITUA pela URL do seu repositório)
git remote add origin https://github.com/osseasofertas/vestcasa-backend.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

### 4. Verificar no GitHub

1. Acesse: https://github.com/osseasofertas/vestcasa-backend
2. Verifique se todos os arquivos aparecem
3. Confirme que está **privado**

### 5. Conectar na Railway

1. Acesse: https://railway.app
2. Clique em **"New Project"**
3. Selecione **"Deploy from GitHub repo"**
4. Autorize o Railway (se necessário)
5. Selecione o repositório **vestcasa-backend**
6. Clique em **"Deploy Now"**

---

## ✅ Checklist

- [ ] Repositório criado no GitHub (privado)
- [ ] Git inicializado na pasta backend
- [ ] Arquivos commitados
- [ ] Remote adicionado
- [ ] Push realizado
- [ ] Repositório visível no GitHub
- [ ] Conectado na Railway

---

## ⚠️ Se Der Erro no Push

Se pedir autenticação, você pode:

1. **Usar Personal Access Token:**
   - GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - Marque `repo`
   - Use o token como senha

2. **Ou configurar SSH:**
   ```powershell
   # Gerar chave SSH (se ainda não tiver)
   ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
   
   # Copiar chave pública
   cat ~/.ssh/id_ed25519.pub
   
   # Adicionar no GitHub: Settings → SSH and GPG keys → New SSH key
   
   # Mudar remote para SSH
   git remote set-url origin git@github.com:osseasofertas/vestcasa-backend.git
   ```

