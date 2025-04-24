# 🧠 API - Meu Portfólio Pessoal

Este repositório contém a API do meu portfólio pessoal. O objetivo é fornecer os dados que serão consumidos pelo frontend, como projetos, tecnologias utilizadas e categorias.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** com **Mongoose**
- **Dotenv** (variáveis de ambiente)
- **Cors**

---

## 📂 Estrutura de Pastas

```bash
src/
├── config/           # Configurações do banco de dados
├── controllers/      # Lógica das requisições
├── models/           # Modelos do MongoDB
├── routes/           # Rotas da aplicação
├── app.ts            # Arquivo principal da aplicação
```

---

## 🧪 Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/api-portfolio.git
```

2. **Instale as dependências**

```bash
npm install
```

3. **Crie um arquivo `.env` na raiz com as seguintes variáveis**

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/seu-banco
```

4. **Execute o projeto em modo dev**

```bash
yarn dev
```

---

## 📌 Endpoints da API

### 🔹 Projetos

GET | `/projetos` | Lista os 4 projetos principais que estão marcados no MongoDB como "favorit: true"
<br>
GET | `/projetos/todos` | Lista todos os projetos
<br>
GET | `/projetos/:id` | Detalhes completos de um projeto
<br>
POST | `/projetos` | Cria um novo projeto


### 🔹 Tecnologias

| GET | `/tecnologias` | Lista todas as tecnologias utilizadas na criação de cada site.
<br>
| POST | `/tecnologias` | Cria uma nova tecnologia (nome + imagem)



### 🔹 Categorias

| GET | `/categorias` | Lista todas as categorias de projeto
<br>
| POST | `/categorias` | Cria uma nova categoria

---

## 📃 Regras de Negócio

- Os 4 projetos da home devem ser sempre os marcados como favorito.
- Cada projeto deve estar vinculado a pelo menos uma tecnologia utilizadas na sua criação.
- Categorias ajudam a classificar os projetos por tipo (ex: front-end, fullstack etc).

---

## 📌 Requisitos Não Funcionais

- Backend construído com **Node.js**, **Express** e **TypeScript**.
- Banco de dados **MongoDB**.
- API estruturada em REST utilizando JSON.
- Tempo de resposta inferior a 1 segundo em requisições comuns.
- Código modular e limpo.
  
---

## 🛠️ Requisitos Funcionais Atendidos

- Alternância de tema (suporte via frontend).
- Listagem de seções: Home, Sobre, Projetos, Contato.
- Detalhamento completo dos projetos via ID.
- Listagem e criação de tecnologias e categorias.

---

## 📦 Scripts disponíveis

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
```

---


## 📫 Screenshot do fluxograma da Api

![screenshot](/src/assets/Screenshot-fluxograma-Api.png)
