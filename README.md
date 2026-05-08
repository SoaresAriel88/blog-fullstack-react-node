<div align="center">

# 📝 Blog Fullstack — React + Node.js

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

Uma aplicação de blog fullstack moderna, com frontend em **React** e backend em **Node.js**, permitindo criação, edição, visualização e exclusão de posts.

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Endpoints da API](#-endpoints-da-api)
- [Screenshots](#-screenshots)
- [Contribuição](#-contribuição)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🧾 Sobre o Projeto

O **Blog Fullstack** é uma aplicação web completa que permite a publicação e gerenciamento de posts de blog. O projeto foi desenvolvido com uma arquitetura separada entre frontend e backend, simulando um ambiente de produção real com comunicação via API REST.

O objetivo principal é demonstrar a integração entre React no lado do cliente e Node.js no servidor, abrangendo as operações CRUD, roteamento, gerenciamento de estado e consumo de API.

---

## ✅ Funcionalidades

- 📰 Listagem de todos os posts do blog
- 🔍 Visualização detalhada de um post individual
- ✍️ Criação de novos posts
- ✏️ Edição de posts existentes
- 🗑️ Exclusão de posts
- 📱 Interface responsiva e amigável
- 🔗 Navegação dinâmica com React Router

---

## 🛠️ Tecnologias

### Frontend
| Tecnologia | Versão | Descrição |
|---|---|---|
| React | ^18.x | Biblioteca para construção da interface |
| React Router DOM | ^6.x | Roteamento client-side |
| CSS3 | — | Estilização dos componentes |

### Backend
| Tecnologia | Versão | Descrição |
|---|---|---|
| Node.js | ^18.x | Runtime JavaScript server-side |
| Express.js | ^4.x | Framework para criação da API REST |
| Nodemon | — | Reinicialização automática do servidor |

---

## 📁 Estrutura do Projeto

```
blog-fullstack-react-node/
│
├── Backend/                  # Servidor Node.js / Express
│   ├── routes/               # Definição das rotas da API
│   ├── controllers/          # Lógica de negócio dos endpoints
│   ├── models/               # Modelos de dados
│   └── index.js              # Ponto de entrada do servidor
│
├── Frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── App.js            # Componente raiz e rotas
│   │   └── index.js          # Ponto de entrada do React
│   └── public/               # Arquivos públicos estáticos
│
├── public/                   # Assets públicos globais
├── src/                      # Código-fonte adicional
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/SoaresAriel88/blog-fullstack-react-node.git
cd blog-fullstack-react-node
```

### 2. Configurar e executar o Backend

```bash
cd Backend
npm install
npm start
```

> O servidor estará disponível em: `http://localhost:5000`

### 3. Configurar e executar o Frontend

Abra um **novo terminal** na raiz do projeto:

```bash
cd Frontend
npm install
npm start
```

> A aplicação estará disponível em: `http://localhost:3000`

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` dentro da pasta `Backend/` com as seguintes variáveis:

```env
PORT=5000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=blog_db
```

> ⚠️ Nunca commite o arquivo `.env`. Ele já está listado no `.gitignore`.

---

## 📡 Endpoints da API

Base URL: `http://localhost:5000/api`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/posts` | Retorna todos os posts |
| `GET` | `/posts/:id` | Retorna um post pelo ID |
| `POST` | `/posts` | Cria um novo post |
| `PUT` | `/posts/:id` | Atualiza um post existente |
| `DELETE` | `/posts/:id` | Remove um post |

---

## 📸 Screenshots

> *(Em breve — adicione capturas de tela da aplicação aqui)*

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "feat: adiciona minha feature"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um **Pull Request**

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
