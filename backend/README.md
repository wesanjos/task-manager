<h1 align="center">
  Gerenciador de Tarefas - Backend
</h1>

## 📝 Visão Geral

API RESTful para o sistema de gerenciamento de tarefas que fornece endpoints para criar, listar e gerenciar tarefas. O backend foi desenvolvido com Node.js e Express, seguindo uma arquitetura MVC para melhor organização e manutenção do código.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **Firebase Admin**: SDK para integração com Firebase
- **UUID**: Geração de identificadores únicos
- **Cors**: Middleware para habilitar CORS
- **Nodemon**: Ferramenta de desenvolvimento para auto-reload

## 📊 Funcionalidades

- API RESTful para gerenciamento de tarefas
- Endpoints para listar e criar tarefas
- Integração com banco de dados Firebase
- Validação de dados de entrada

## 📋 Requisitos

Verifique a versão do Node.js (>= 20.0.0) instalada no seu sistema:

```bash
node -v # Deve ser >= 20.0.0
```

## 📦 Configuração

```bash
# Clonar o repositório
git clone <url-backend>

# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install
```

## 🔥 Firebase

> [!WARNING]
> É necessário realizar a configuração do Firestore, inserindo o arquivo `serviceAccountKey.json` na pasta `src/config`.

- O arquivo `serviceAccountKey.json` pode ser obtido no Firebase Console, na seção de Configuração do Projeto > Contas de Serviço > Gerar nova chave privada.

Para agilizar esse processo, está disponível no Google Drive, basta fazer o download do arquivo, descompactá-lo e coloca-lo na pasta `src/config`.

- [serviceAccountKey.json](https://drive.google.com/file/d/1DrCcS2FGNhbrhdjCZ8uiozfpzqwcggfJ/view?usp=sharing) - Arquivo temporário

## 🚀 Iniciando o projeto

Para iniciar o projeto, siga os passos abaixo:

```bash
# Iniciar o backend em modo desenvolvimento
npm run dev

# Iniciar o backend em modo produção
npm run start
```

- O servidor será iniciado na porta 8085 por padrão


## 📁 Estrutura do Projeto

```bash
backend/
├── src/                     # Código-fonte da aplicação
│   ├── config/              # Configurações da aplicação
│   ├── controllers/         # Controladores da API
│   ├── routes/              # Definição de rotas
│   ├── server/              # Configuração do servidor
│   ├── services/            # Serviços de negócio
│   ├── tests/               # Testes automatizados
│   └── utils/               # Utilitários e funções auxiliares
├── .eslintrc.js             # Configuração do ESLint
├── .nvmrc                   # Versão do Node.js
├── .prettierrc              # Configuração do Prettier
├── package.json             # Dependências e scripts
└── README.md                # Documentação
```

## 📡 API

O backend expõe os seguintes endpoints RESTful:

<details>
<summary><code>GET</code><code><b>/get-tasks</b></code></summary>

- Obtém todas as tarefas
- O seu retorno é um array de objetos, cada um com as propriedades `id`, `description`, `responsible`, `status` e `createdAt`.

Exemplo de retorno:
```json
[
    {
        "id": 1,
        "description": "Tarefa 1",
        "responsible": "Wesley",
        "status": "todo",
        "createdAt": "2025-06-12T12:19:41.000Z"
    }
]
```

</details>

<details>
<summary><code>POST</code><code><b>/insert-tasks</b></code></summary>

- Insere uma nova tarefa
- Parâmetros de entrada:
  - `description`: Descrição da tarefa
  - `responsible`: Responsável pela tarefa
  - `status`: Status da tarefa (todo, doing, done)

Exemplo de corpo da requisição:
```json
[
    {
        "description": "Tarefa 1",
        "responsible": "Wesley",
        "status": "todo"
    }
]
```

Exemplo de retorno:
```json
[
    {
        "id": 1,
        "description": "Tarefa 1",
        "responsible": "Wesley",
        "status": "todo",
        "createdAt": "2025-06-12T12:19:41.000Z"
    }
]
```
</details>

## 🔄 Integração com Frontend

Este backend foi projetado para trabalhar em conjunto com o frontend React do Gerenciador de Tarefas. Para executar o sistema completo:

1. Inicie o backend com `npm run dev`
2. Faça a configuração do Firebase, inserindo o arquivo `serviceAccountKey.json` na pasta `src/config`.
3. Inicie o frontend com `npm run dev` na pasta do frontend
4. Acesse a aplicação no navegador através da URL fornecida pelo frontend
