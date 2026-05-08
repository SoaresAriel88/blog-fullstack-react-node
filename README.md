<div align="center">

# 📝 Blog Fullstack — React + Node.js

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma aplicação de blog fullstack com frontend em **React** e backend em **Node.js + Express**, utilizando **SQLite** como banco de dados e upload de imagens via **Multer**.

> ⚠️ **Projeto local** — A aplicação roda apenas em ambiente de desenvolvimento local. Não há deploy disponível no momento.

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Screenshots](#-screenshots)
- [Tecnologias e Dependências](#-tecnologias-e-dependências)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Endpoints da API](#-endpoints-da-api)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🧾 Sobre o Projeto

O **Blog Fullstack** é uma aplicação web completa para criação e gerenciamento de posts. Desenvolvido com arquitetura separada entre frontend e backend, com comunicação via API REST usando **Axios**.

Cada post possui **título**, **corpo de texto** e **imagem** (via upload de arquivo). A interface permite buscar, adicionar, editar e deletar posts de forma dinâmica e responsiva.

---

## ✅ Funcionalidades

- 📰 Listagem de todos os posts com imagem, título e descrição
- 🔍 Busca de posts em tempo real
- ➕ Criação de novos posts com título, corpo e upload de imagem
- ✏️ Edição de posts existentes via modal
- 🗑️ Exclusão de posts
- 📱 Interface responsiva com tema escuro

---

## 📸 Screenshots

### Lista de Posts
> Visualização dos posts cadastrados com opções de **Delete** e **Edit Post**

<img width="500" height="300" alt="Image" src="https://github.com/user-attachments/assets/cf7b394e-ff7c-4123-b640-3bba092c36ab" />


### Modal — Editar Post
> Formulário para editar título, corpo e imagem de um post existente
<img width="500" height="300" alt="Image" src="https://github.com/user-attachments/assets/d99fdab9-653a-4782-8d47-ab63bbb5edb9" />

### Modal — Adicionar Post
> Formulário para criação de um novo post com título, body e seleção de imagem
<img width="400" height="300" alt="Image" src="https://github.com/user-attachments/assets/3ccd4a67-b565-4198-9818-46731e944e5a" />

---

## 🛠️ Tecnologias e Dependências

### Frontend
| Pacote | Versão | Descrição |
|---|---|---|
| `react` | ^19.2.5 | Biblioteca principal para construção da UI |
| `react-dom` | ^19.2.5 | Renderização do React no navegador |
| `react-scripts` | 5.0.1 | Scripts de build e desenvolvimento (CRA) |
| `axios` | ^1.16.0 | Requisições HTTP para a API |
| `multer` | ^2.1.1 | Upload de arquivos |

### Backend
| Pacote | Versão | Descrição |
|---|---|---|
| `express` | ^5.2.1 | Framework para criação da API REST |
| `sequelize` | ^6.37.8 | ORM para gerenciamento do banco de dados |
| `better-sqlite3` | ^12.9.0 | Driver SQLite de alta performance |
| `sqlite3` | ^6.0.1 | Banco de dados relacional local |
| `multer` | ^2.1.1 | Upload de imagens dos posts |
| `cors` | ^2.8.6 | Liberação de requisições entre origens |
| `dotenv` | ^17.4.2 | Gerenciamento de variáveis de ambiente |
| `nodemon` | ^3.1.14 | Reinicialização automática em desenvolvimento |

---

## 📁 Estrutura do Projeto

```
blog-fullstack-react-node/
│
├── Backend/                  # Servidor Node.js / Express
│   ├── routes/               # Rotas da API
│   ├── controllers/          # Lógica dos endpoints
│   ├── models/               # Modelos Sequelize (SQLite)
│   ├── uploads/              # Imagens enviadas via Multer
│   └── app.js                # Ponto de entrada do servidor
│
├── Frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── App.js            # Componente raiz
│   │   └── index.js          # Ponto de entrada do React
│   └── public/
│
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Como Executar

### Backend

```bash
cd Backend
npm run dev
```

### Frontend

```bash
cd Frontend
npm start
```

---

## 📡 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/posts` | Retorna todos os posts |
| `GET` | `/posts/:id` | Retorna um post pelo ID |
| `POST` | `/posts` | Cria um novo post |
| `PUT` | `/posts/:id` | Atualiza um post existente |
| `DELETE` | `/posts/:id` | Remove um post |

---

## 👤 Autor

**Ariel Soares**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SoaresAriel88)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito com ❤️ por <a href="https://github.com/SoaresAriel88">Ariel Soares</a>
</div>
