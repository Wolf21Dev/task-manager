# Task Manager

## Descrição

O **Task Manager** é uma aplicação web fullstack desenvolvida para o gerenciamento de tarefas pessoais.
O sistema permite que usuários se cadastrem, realizem login e gerenciem suas próprias tarefas de forma segura,
garantindo autenticação e isolamento de dados por usuário.

O projeto foi desenvolvido com foco em **portfólio acadêmico (TCC)**, aplicando conceitos fundamentais de
desenvolvimento web, autenticação JWT e operações CRUD.

---

## Funcionalidades

- Cadastro de usuários
- Login com autenticação via JWT
- Criação de tarefas
- Listagem de tarefas do usuário autenticado
- Marcação de tarefas como concluídas
- Exclusão de tarefas
- Logout
- Isolamento de dados por usuário

---

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## Estrutura do Projeto

```
task-manager/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── tasks.html
    ├── css/
    │   └── style.css
    └── js/
        ├── auth.js
        └── tasks.js
```

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB instalado e em execução (local)

---

### Backend

1. Acesse a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env`:
```env
JWT_SECRET=sua_chave_secreta
```

4. Inicie o servidor:
```bash
npm run dev
```

O backend estará disponível em:
```
http://localhost:3000
```

---

### Frontend

1. Acesse a pasta `frontend`
2. Abra o arquivo `index.html` no navegador

---

## Screenshots

### Tela de Login e Cadastro
![Login](./screenshots/login.png)

### Gerenciamento de Tarefas
![Tasks](./screenshots/tasks.png)

---

## Observações

Este projeto foi desenvolvido com fins educacionais e para composição de portfólio,
priorizando boas práticas de organização de código, separação de responsabilidades
e segurança básica em aplicações web.
