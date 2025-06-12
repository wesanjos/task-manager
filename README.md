# Gerenciador de Tarefas - Documentação

## 📋 Visão Geral

Este é um sistema completo de gerenciamento de tarefas composto por um backend Node.js/Express e um frontend React. O sistema permite criar, visualizar e organizar tarefas em três categorias: To Do, Doing e Done.

## 🗂️ Estrutura do Projeto

O projeto está organizado em dois diretórios principais:

```
task-manager/
├── backend/       # API RESTful em Node.js/Express
└── frontend/      # Interface de usuário em React
```

## 🔧 Requisitos

- Node.js >= 20.0.0
- npm (geralmente instalado com o Node.js)

## 📁 Guia de Acesso aos Diretórios

Para iniciar os serviços, acesse os diretórios `backend` e `frontend`. As instruções completas estão disponíveis no arquivo README.

## 📡 API Endpoints

### GET /get-tasks
- Obtém todas as tarefas
- Retorna um array de objetos com as propriedades `id`, `description`, `responsible`, `status` e `createdAt`

### POST /insert-tasks
- Insere uma nova tarefa
- Parâmetros de entrada: `description`, `responsible`, `status`

## 🧪 Testes

### Frontend
```
cd frontend
npm run test        # Executa testes
npm run test:watch  # Executa testes em modo watch
npm run test:coverage # Executa testes com cobertura
```

## 🔨 Build para Produção

### Frontend
```
cd frontend
npm run build
```

### Backend
```
cd backend
npm run start
```