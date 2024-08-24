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

## 15/08/2024

### Capítulos Estudados

#### 1. **Capítulo 13: Lidando com Erros**

- **Principais Aprendizados:**

  - Implementar `try/catch` nas Server Actions para tratamento de erros.
  - Utilizar o arquivo `error.tsx` para capturar erros inesperados e exibir uma UI de fallback.
  - Configurar o `error.tsx` como um componente cliente que aceita os parâmetros `error` e `reset`.
  - Empregar a função `notFound` para lidar com erros 404 ao buscar recursos inexistentes.
  - Criar um arquivo `not-found.tsx` para exibir uma interface de erro específica.

- **Resumo:**

O capítulo aborda estratégias de tratamento de erros em Next.js, com foco no uso de arquivos e funções específicas para gerenciar falhas e apresentar interfaces de fallback. Inicialmente, é apresentado o uso de try/catch nas Server Actions, permitindo a captura e tratamento de erros durante a execução dessas ações. É destacado que a função redirect deve ser chamada fora do bloco try/catch para evitar que seja capturada como erro.

O capítulo também introduz o error.tsx, um arquivo especial utilizado para definir limites de interface de usuário (UI) em segmentos de rota, servindo como um mecanismo para capturar erros inesperados e exibir uma UI de fallback ao usuário. O arquivo deve ser configurado como um componente cliente e aceita dois parâmetros: error, que é uma instância do objeto de erro nativo do JavaScript, e reset, uma função para redefinir o limite de erro e tentar renderizar novamente o segmento de rota.

Além disso, o capítulo explica o uso da função notFound para lidar com erros 404, quando um recurso solicitado não é encontrado. Ao buscar um recurso inexistente, pode-se invocar notFound para exibir uma interface de erro específica, utilizando o arquivo not-found.tsx.

### 2. **Capítulo 14: Melhorando a acessibilidade**

- **Principais Aprendizados:**

  - Uso de práticas para garantir a acessibilidade em formulários.
  - Implementação da validação de formulários no lado do servidor.
  - Utilização do React `useActionState` hook para exibição de erros.
  - Aplicação de técnicas de acessibilidade, como rótulos de ária.

- **Resumo:**

O Capítulo 14 aborda a melhoria da acessibilidade em formulários e a validação do lado do servidor em aplicações Next.js. O conceito de acessibilidade é apresentado como a prática de criar aplicativos web que sejam utilizáveis por todos, incluindo pessoas com deficiências. São exploradas práticas como o uso do plugin `eslint-plugin-jsx-a11y` para detectar problemas de acessibilidade, a utilização de HTML semântico, rotulagem adequada e contornos de foco em formulários para melhorar a navegação.

O capítulo também foca na validação de formulários, explicando a diferença entre validação no cliente e no servidor, e como o hook `useActionState` do React pode ser utilizado para gerenciar e exibir erros de formulário. A implementação de validação no servidor é exemplificada com o uso de Zod para garantir que os dados do formulário estejam no formato correto antes de serem processados. Além disso, são discutidas técnicas para melhorar a acessibilidade dos formulários, incluindo a adição de rótulos de ária, que permitem aos leitores de tela comunicar erros aos usuários de forma eficaz.

---
