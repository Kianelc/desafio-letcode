# Registro de Estudo Diário

## Sumário

- [Dia 01 - Estudo do Capítulo 11 e 12 de Next.js](#14082024)

---

## 14/08/2024

### Capítulos Estudados

#### 1. **Capítulo 11: Adicionando Pesquisa e Paginação**

- **Principais Aprendizados:**

  - Conceito de páginas no Next.js
  - Criação de páginas com a estrutura de pastas
  - Compreensão do funcionamento do Server-Side Rendering (SSR) e Static Site Generation (SSG)

- **Resumo:**
  Este capítulo fornece uma introdução ao Next.js, uma estrutura React voltada para a produção de aplicações web modernas e otimizadas. O foco está na configuração inicial do projeto e na criação de páginas utilizando a estrutura de diretórios do Next.js.

  - **Criação e Estrutura de Páginas:**

    - **Páginas com Arquivos .js:** No Next.js, cada arquivo `.js` dentro da pasta `pages` se torna automaticamente uma rota na aplicação. Esta abordagem simplifica a criação de rotas, eliminando a necessidade de configuração adicional.
    - **Roteamento Automático:** A estrutura de pastas define as rotas da aplicação, com o nome do arquivo correspondendo ao caminho da URL.

  - **Server-Side Rendering (SSR) e Static Site Generation (SSG):**
    O Next.js oferece diferentes métodos de renderização para otimizar o desempenho e a experiência do usuário, como SSR e SSG.

    - **SSR:** O Server-Side Rendering permite que as páginas sejam renderizadas no servidor a cada requisição, proporcionando conteúdo dinâmico e atualizações em tempo real.
    - **SSG:** Já o Static Site Generation gera páginas estáticas no momento da build, tornando a entrega de conteúdo extremamente rápida, ideal para páginas que não mudam com frequência.

  - **Configuração Inicial:**
    - **Instalação:** A instalação do Next.js é simplificada pelo uso do comando `npx create-next-app`, que cria um projeto com toda a estrutura necessária, incluindo pastas para `pages`, `public`, e `styles`.
    - **Primeira Página:** Criar uma página inicial em `pages/index.js` para testar a configuração e ver a aplicação funcionando localmente.

  Este capítulo prepara o terreno para o desenvolvimento de aplicações com Next.js, explicando conceitos fundamentais como roteamento, renderização e estrutura de arquivos. Compreender essas bases é essencial para aproveitar ao máximo as funcionalidades do framework em projetos futuros.

#### 2. **Capítulo 12: Dados Mutantes**

- **Principais Aprendizados:**

  - Uso das ações do React Server para manipular dados de forma assíncrona diretamente no servidor.
  - Validação de dados com a biblioteca Zod antes de enviar ao banco de dados.
  - Criação e atualização de faturas utilizando segmentos de rota dinâmicos e consultas paralelas.

- **Resumo:**

  O capítulo aborda o uso das ações do React Server para manipular dados de forma assíncrona diretamente no servidor, sem a necessidade de endpoints de API. Isso garante maior segurança, protegendo contra ameaças como ataques e acessos não autorizados.

  A utilização de formulários com ações do servidor é explicada, demonstrando como invocar ações usando o atributo `action` nos elementos `<form>`, permitindo que os dados do formulário sejam manipulados diretamente no servidor. Além disso, é destacada a importância de validar e preparar os dados, garantindo que estejam no formato correto antes de serem enviados ao banco de dados, com a sugestão do uso da biblioteca Zod para validação de tipos.

  O processo de criação de uma fatura é descrito em etapas, desde a construção de formulários, extração e validação de dados, até a inserção no banco de dados e revalidação do cache do cliente usando a API `revalidatePath` do Next.js.

  Além disso, o capítulo aborda como atualizar faturas utilizando segmentos de rota dinâmicos baseados em IDs. Explica-se como pré-preencher formulários com dados já existentes e realizar consultas paralelas para buscar informações da fatura e clientes.

---
