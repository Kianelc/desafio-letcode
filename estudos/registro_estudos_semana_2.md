# Registro de Estudo Diário

## Sumário

- [Dia 01 - Estudo do Capítulo 1 e 2 de Next](#08082024)

---

## 08/08/2024

### Capítulos Estudados

#### 1. **Capítulo 1: Começando**

- **Principais Aprendizados:**

  - Utilização de `pnpm`
  - Criação de projetos com `create-next-app`
  - Exploração e estrutura do projeto
  - Uso de dados de espaço reservado
  - Integração com TypeScript
  - Execução do servidor de desenvolvimento

- **Resumo:**

  Ao criar um novo projeto Next.js, recomenda-se utilizar o gerenciador de pacotes `pnpm` por ser mais rápido e eficiente que `npm` ou `yarn`. Para iniciar o projeto, utiliza-se o comando `npx create-next-app`, que configura automaticamente um aplicativo Next.js, incluindo a opção de adicionar um exemplo preexistente para facilitar o aprendizado.

  - **Estrutura de Pastas:**

    - **/app:** Contém as rotas, componentes e lógica principal do aplicativo.
    - **/app/lib:** Armazena funções reutilizáveis e de busca de dados.
    - **/app/ui:** Inclui os componentes de interface de usuário pré-estilizados.
    - **/public:** Guarda os ativos estáticos, como imagens.
    - **Arquivos de configuração:** Configurações como `next.config.js` são geradas automaticamente e não necessitam de alterações.

  - **Dados de Espaço Reservado:**

    Para desenvolvimento, é possível usar dados de espaço reservado em formato JSON ou como objetos JavaScript. No projeto, os dados de placeholder são fornecidos no arquivo `/app/lib/placeholder-data.ts`, representando tabelas que serão usadas na inicialização do banco de dados.

  - **Uso do TypeScript:**

    O projeto está escrito em TypeScript, garantindo a integridade dos tipos de dados e evitando erros comuns, como passar o tipo de dado incorreto para componentes ou banco de dados.

  - **Execução do Servidor de Desenvolvimento:**

    Após instalar os pacotes com `pnpm i`, o servidor de desenvolvimento é iniciado com `pnpm dev`, rodando na porta 3000. A página inicial será exibida no navegador ao acessar `http://localhost:3000`.

#### 2. **Capítulo 2: Estilo CSS**

- **Principais Aprendizados:**

  - Estilos globais
  - Uso do Tailwind CSS
  - Módulos CSS
  - Biblioteca `clsx`
  - Outras opções de estilização

- **Resumo:**

  Neste capítulo, foram abordadas diferentes maneiras de estilizar um aplicativo Next.js:

  - **Estilos Globais:**
    A pasta `/app/ui` contém um arquivo `global.css` que pode ser usado para adicionar regras CSS globais, como redefinições e estilos para elementos HTML. O arquivo deve ser importado no layout raiz do aplicativo (`layout.tsx`).

  - **Tailwind CSS:**
    É uma estrutura CSS que permite a aplicação rápida de estilos através de classes utilitárias diretamente no código JSX. Ao iniciar um novo projeto com `create-next-app`, o Next.js oferece a opção de configurar automaticamente o Tailwind. As classes Tailwind são aplicadas individualmente a cada elemento, facilitando a manutenção e evitando colisões de estilo.

  - **Módulos CSS:**
    Oferecem uma alternativa ao Tailwind, permitindo que estilos sejam definidos de forma escopada para cada componente. Os módulos CSS geram nomes de classes exclusivos automaticamente, evitando conflitos de estilo.

  - **Biblioteca `clsx`:**
    Permite alternar nomes de classes de forma condicional com base em estados ou outras condições, sendo útil para a estilização condicional de elementos.

  - **Outras Opções:**
    Além das abordagens mencionadas, é possível utilizar Sass para importar arquivos `.css` e `.scss`, bem como bibliotecas CSS-in-JS, como `styled-jsx`, `styled-components` e `emotion`.

  Essas técnicas oferecem flexibilidade para estilizar aplicativos Next.js de acordo com as preferências do desenvolvedor, possibilitando até o uso combinado de diferentes abordagens no mesmo projeto.

---
