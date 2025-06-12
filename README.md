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

## 📁 Guia de Acesso

> [!NOTE]
> Faça a inicialização do backend e frontend para que o sistema funcione corretamente. Não esqueça de configurar o firebase no backend.

Dentro de cada diretório você encontrará um arquivo README.md com as instruções de como iniciar o serviço.

### Clonagem do repositório

Siga os passos abaixo para iniciar os serviços:

```bash
git clone https://github.com/wess/task-manager.git

cd task-manager
```

### Backend
```
cd backend

-> Siga as instruções do README.md para inicializar o backend.
```

### Frontend
```
cd frontend

-> Siga as instruções do README.md para inicializar o frontend.
```

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