# Registro de Estudo Diário

## Sumário

- [Dia 01 - Estudo do Capítulo 1 e 2 de Next](#07082024)
- [Dia 02 - Estudo do Capítulo 3 e 4 de Next](#08082024)

---

## 07/08/2024

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

## 08/08/2024

### Capítulos Estudados

#### 1. **Capítulo 3: Otimização de Fontes e Imagens**

- **Principais Aprendizados:**

  - Adição de fontes personalizadas com `next/font`
  - Otimização de fontes para melhorar o desempenho
  - Adição de imagens com `next/image`
  - Otimização de imagens para evitar mudanças de layout e garantir responsividade

- **Resumo:**

  No desenvolvimento de aplicações Next.js, a otimização de fontes e imagens desempenha um papel crucial na melhoria da experiência do usuário e do desempenho do site. O Next.js facilita a adição e otimização de fontes personalizadas através do módulo `next/font`, que baixa os arquivos de fonte durante a compilação e os hospeda junto aos ativos estáticos, eliminando a necessidade de requisições de rede adicionais.

  - **Adição de Fontes Personalizadas:**

    - **Fonte Primária:** A fonte 'Inter' do Google Fonts é adicionada ao aplicativo importando-a no arquivo `fonts.ts` e aplicando-a globalmente ao `<body>` no arquivo `layout.tsx`.
    - **Fonte Secundária:** A fonte 'Lusitana' é importada e aplicada a elementos específicos, como parágrafos, com a possibilidade de especificar diferentes pesos de fonte.

  - **Otimização de Imagens:**

    O Next.js permite a otimização automática de imagens através do componente `next/image`, que previne mudanças de layout durante o carregamento, redimensiona imagens para diferentes dispositivos e carrega imagens fora da janela de visualização de forma progressiva.

    - **Imagem Hero:** Duas versões da imagem hero (desktop e mobile) são adicionadas ao projeto, com a versão apropriada sendo exibida conforme o dispositivo do usuário. As dimensões são definidas para evitar mudanças de layout e garantir que a imagem correta seja exibida no dispositivo correspondente.

  A aplicação de fontes personalizadas e a otimização de imagens com Next.js contribuem significativamente para uma experiência de usuário mais fluida e um melhor desempenho geral do site. Essas práticas são essenciais para o desenvolvimento moderno, onde o desempenho e a responsividade são cruciais.

#### 2. **Capítulo 4: Criando Layouts e Páginas**

- **Principais Aprendizados:**

  - Criação de rotas aninhadas usando o roteamento do sistema de arquivos
  - Uso de layouts aninhados para compartilhar UI entre várias páginas
  - Entendimento de colocation, renderização parcial e layout raiz
  - Prática de criação de páginas adicionais no painel

- **Resumo:**
  Neste capítulo, o foco é expandir o aplicativo para além da home page, criando rotas adicionais e estruturando o layout de forma eficiente. O Next.js permite o roteamento aninhado utilizando o sistema de arquivos, onde cada pasta representa um segmento de rota correspondente a uma URL.

  - **Roteamento Aninhado:**

    - Pastas dentro do diretório `app` são usadas para criar rotas. O arquivo `page.tsx` em cada pasta é necessário para que a rota seja acessível. Por exemplo, a rota `/dashboard` é associada ao arquivo `/app/dashboard/page.tsx`.

    ![Imagem ilustrativa do roteamento aninhado](./materiais_adicionais/imagens/root.png)

  - **Criando a Página do Painel:**

    - Para criar novas rotas, basta adicionar uma pasta com um arquivo `page.tsx`. O conteúdo desse arquivo define a interface acessível publicamente. É possível organizar componentes de UI e outros códigos relacionados em pastas adicionais dentro de `app`.

  - **Prática: Criando Páginas Adicionais no Painel:**

    - Duas novas páginas são criadas como prática: uma página de clientes e uma página de faturas, acessíveis em URLs específicas dentro do painel.

  - **Criando o Layout do Painel:**

    - Layouts no Next.js permitem compartilhar elementos de navegação entre várias páginas. Isso é feito com o arquivo `layout.tsx`, onde componentes como um menu de navegação são importados e aplicados a todas as páginas aninhadas.
    - A renderização parcial é um benefício desse sistema, permitindo que apenas os componentes da página sejam atualizados durante a navegação, mantendo o layout intacto.

    ![Imagem ilustrativa para layout do painel](./materiais_adicionais/imagens/layout.png)

  - **Layout Raiz:**
    - O layout raiz, criado no capítulo anterior, é compartilhado entre todas as páginas do aplicativo e pode incluir metadados, modificações em tags HTML e o corpo do documento. O layout do painel é específico para suas páginas e não necessita alterar o layout raiz.

  A criação de rotas e layouts no Next.js é essencial para o desenvolvimento de aplicações organizadas e escaláveis, permitindo que diferentes partes da interface do usuário sejam compartilhadas ou isoladas conforme necessário.

---

## 09/08/2024

### Capítulos Estudados

#### 1. **Capítulo 5: Navegando entre páginas**

- **Principais Aprendizados:**

  - Uso do componente `next/link` para navegação entre páginas
  - Exibição de links ativos com o hook `usePathname()`
  - Funcionamento da navegação no Next.js
  - Otimização da navegação com divisão automática de código e pré-busca

- **Resumo:**

  Neste capítulo, são abordadas as melhores práticas para implementar navegação entre páginas em uma aplicação Next.js, substituindo o uso tradicional de elementos `<a>` pelo componente `<Link />`. Este componente permite a navegação no lado do cliente utilizando JavaScript, evitando atualizações completas da página e proporcionando uma experiência mais fluida para o usuário.

  - **Uso do Componente `<Link />`:**

    - **Implementação:** O componente `<Link />` é utilizado para substituir tags `<a>` tradicionais, permitindo uma navegação mais eficiente entre as páginas sem recarregar completamente o conteúdo.
    - **Vantagem:** A utilização do `<Link />` em vez de `<a>` resulta em transições mais suaves, pois o Next.js executa a renderização de partes do aplicativo no servidor, sem a necessidade de atualizar a página inteira.

  - **Divisão de Código e Pré-Busca:**

    O Next.js aprimora a navegação ao dividir automaticamente o código por rotas, isolando páginas para que erros não afetem o restante do aplicativo. Além disso, realiza a pré-busca de código quando os links aparecem na viewport, carregando as páginas vinculadas em segundo plano e tornando as transições quase instantâneas.

    - **Divisão de Código:** A aplicação é segmentada por rotas, o que isola erros e melhora a resiliência.
    - **Pré-Busca:** Quando os links estão na viewport, o Next.js pré-carrega as páginas, otimizando a velocidade de navegação.

  - **Exibição de Links Ativos:**

    - **Hook `usePathname()`:** O Next.js fornece o hook `usePathname()` para identificar o caminho atual da URL e aplicar estilos condicionais aos links, destacando o link ativo na interface.
    - **Estilização Condicional:** Combinando o `usePathname()` com a biblioteca `clsx`, é possível aplicar classes CSS que destacam visualmente o link correspondente à página atual.

  A aplicação do componente `<Link />`, juntamente com a otimização da navegação e a exibição de links ativos, melhora significativamente a experiência do usuário em aplicações Next.js, tornando a navegação mais rápida e intuitiva.

#### 2. **Capítulo 6: Configurando seu banco de dados**

- **Principais Aprendizados:**

  - Configuração do banco de dados PostgreSQL com o @vercel/postgres
  - Integração do projeto com GitHub e Vercel
  - Semeadura do banco de dados com dados iniciais
  - Exploração e execução de consultas no banco de dados

- **Resumo:**

  Este capítulo aborda a configuração e integração de um banco de dados PostgreSQL utilizando o @vercel/postgres, além de como semear o banco de dados com dados iniciais e explorar suas tabelas. Também são cobertas práticas para solucionar problemas e executar consultas SQL.

  - **Configuração do Banco de Dados:**

    - **Criação e Integração:** O banco de dados PostgreSQL é configurado no painel do Vercel. É necessário criar uma conta no Vercel, conectar o repositório GitHub e criar um banco de dados na aba Storage. As credenciais devem ser copiadas para o arquivo `.env`, e o SDK @vercel/postgres deve ser instalado.
    - **Região do Banco de Dados:** Definir a região como Washington DC (iad1) é crucial para reduzir a latência. Alterações na região não são possíveis após a criação do banco de dados.

  - **Semeadura do Banco de Dados:**

    - **Script de Semeadura:** A pasta `/app/seed` contém um script que cria as tabelas e insere dados iniciais no banco. Acesse `localhost:3000/seed` para rodar o script e popular o banco. Após a execução, a mensagem "Database seeded successfully" será exibida.
    - **Problemas Comuns:** Verifique se as credenciais estão visíveis e corretamente copiadas. Se necessário, use `bcryptj` em vez de `bcrypt` e remova tabelas existentes com o comando SQL `DROP TABLE` se houver problemas ao semear o banco.

  - **Exploração e Consultas:**

    - **Exploração das Tabelas:** No painel Vercel, é possível visualizar as tabelas criadas, como usuários, clientes, faturas e receita. Certifique-se de que os dados estejam alinhados com o script de semeadura.
    - **Execução de Consultas:** A aba "query" permite interagir com o banco de dados através de comandos SQL padrão. Utilize com cuidado, especialmente para comandos destrutivos como `DROP TABLE`.

  A configuração do banco de dados PostgreSQL com o @vercel/postgres e a semeadura com dados iniciais são essenciais para o desenvolvimento do aplicativo, enquanto a exploração e execução de consultas ajudam a verificar e interagir com os dados armazenados.

---
