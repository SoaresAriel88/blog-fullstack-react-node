<div align="center">

# 📝 Blog Fullstack — React + Node.js

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

Uma aplicação de blog fullstack moderna, com frontend em **React** e backend em **Node.js**, permitindo criação, edição, visualização e exclusão de posts com upload de imagem.

> ⚠️ **Projeto local** — A aplicação roda apenas em ambiente de desenvolvimento local. Não há deploy disponível no momento.

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Screenshots](#-screenshots)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Endpoints da API](#-endpoints-da-api)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🧾 Sobre o Projeto

O **Blog Fullstack** é uma aplicação web completa para criação e gerenciamento de posts. O projeto foi desenvolvido com arquitetura separada entre frontend e backend, com comunicação via API REST.

Cada post possui **título**, **corpo de texto** e **imagem** (via upload de arquivo). A interface permite buscar, adicionar, editar e deletar posts de forma dinâmica e responsiva.

---

## ✅ Funcionalidades

- 📰 Listagem de todos os posts com imagem, título e descrição
- 🔍 Busca de posts em tempo real
- ➕ Criação de novos posts com título, corpo e upload de imagem
- ✏️ Edição de posts existentes via modal
- 🗑️ Exclusão de posts com botão dedicado
- 📱 Interface responsiva com tema escuro

---

## 📸 Screenshots

### Lista de Posts
> Visualização dos posts cadastrados com opções de **Delete** e **Edit Post**

![Lista de Posts](./screenshots/lista-posts.png)

---

### Modal — Editar Post
> Formulário para editar título, corpo e imagem de um post existente

![Editar Post](./screenshots/editar-post.png)

---

### Modal — Adicionar Post
> Formulário para criação de um novo post com campos de título, body e seleção de imagem

![Adicionar Post](./screenshots/adicionar-post.png)

---

## 🛠️ Tecnologias e Dependências

### Frontend
| Pacote | Descrição |
|---|---|
| `react` | Biblioteca principal para construção da UI |
| `react-dom` | Renderização do React no navegador |
| `react-router-dom` | Roteamento client-side |
| `react-scripts` | Scripts de build e desenvolvimento (CRA) |

### Backend
| Pacote | Descrição |
|---|---|
| `express` | Framework para criação da API REST |
| `nodemon` | Reinicialização automática do servidor em dev |
| `cors` | Liberação de requisições entre origens diferentes |
| `multer` | Upload de arquivos (imagens dos posts) |

---

## 📁 Estrutura do Projeto

```
blog-fullstack-react-node/
│
├── Backend/                  # Servidor Node.js / Express
│   ├── routes/               # Definição das rotas da API
│   ├── controllers/          # Lógica dos endpoints
│   ├── models/               # Modelos de dados
│   └── index.js              # Ponto de entrada do servidor
│
├── Frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── App.js            # Componente raiz e rotas
│   │   └── index.js          # Ponto de entrada do React
│   └── public/
│
├── public/                   # Assets públicos globais
├── src/                      # Código-fonte adicional
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Como Executar

### Backend

```bash
cd Backend
npm start
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
