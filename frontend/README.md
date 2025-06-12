<h1 align="center">
  Gerenciador de Tarefas
</h1>

## 📝 Visão Geral

Sistema web para gerenciamento de tarefas que permite criar, visualizar e organizar atividades em três categorias: To Do, Doing e Done. O projeto foi desenvolvido com React e Material UI, seguindo a arquitetura de componentes Atomic Design.

## 🛠️ Tecnologias Utilizadas

- **React 19**: Framework JavaScript
- **Material UI**: Biblioteca de componentes
- **Vite**: Ferramenta de build rápida para desenvolvimento
- **Axios**: Cliente HTTP para comunicação com a API
- **Vitest**: Framework de testes unitários
- **Testing Library**: Biblioteca para testes de interface

## 📊 Funcionalidades

- Visualização de tarefas em três colunas (To Do, Doing, Done)
- Criação de novas tarefas com descrição e responsável
- Contagem de tarefas por categoria
- Interface responsiva para diferentes tamanhos de tela

## 📋 Requisitos

Verifique a versão do Node.js (>= 20.0.0) instalada no seu sistema:

```bash
node -v # Deve ser >= 20.0.0
```

## 📦 Configuração


```bash
# Clonar o repositório
git clone <url-frontend>

# Entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install
```

## 🚀 Iniciando o projeto

Para iniciar o projeto, siga os passos abaixo:

```bash
# Iniciar o frontend
npm run dev
```

- O projeto será iniciado na porta 5173 (Confirmar a porta disponível)


### ⚙️ Demais comandos

```bash
# Construir para produção
npm run build

# Executar testes
npm run test

# Executar testes em watch mode
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 📁 Estrutura do Projeto

> [!IMPORTANT]
> O projeto segue a arquitetura de componentes **Atomic Design**. Sendo eles Atoms, Molecules, Organisms, Templates e Pages.

```bash
frontend/
├── public/                  # Arquivos estáticos públicos
├── src/                     # Código-fonte da aplicação
│   ├── api/                 # Configuração e serviços de API
│   ├── assets/              # Recursos estáticos (imagens, fontes)
│   ├── components/          # Componentes React (Atomic Design)
│   │   ├── atoms/           # Componentes básicos e indivisíveis
│   │   ├── molecules/       # Grupos de átomos funcionando juntos
│   │   ├── organisms/       # Grupos complexos de moléculas
│   │   └── templates/       # Layouts de página
│   ├── pages/               # Componentes de página
│   └── styles/              # Estilos globais e temas
├── index.html               # Ponto de entrada HTML
├── package.json             # Dependências e scripts
└── vite.config.js           # Configuração do Vite
```


## 📡 API

> [!NOTE]
> Antes de iniciar o frontend, é necessário iniciar a API, que pode ser feita com o comando `npm run dev` na pasta `backend`.

O frontend se comunica com uma API REST e possui os seguintes endpoints:

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
- O seu retorno é um objeto com as propriedades `id`, `description`, `responsible`, `status` e `createdAt`.

Exemplo de retorno:
```json
{
    "id": 1,
    "description": "Tarefa 1",
    "responsible": "Wesley",
    "status": "todo",
    "createdAt": "2025-06-12T12:19:41.000Z"
}
```
</details>