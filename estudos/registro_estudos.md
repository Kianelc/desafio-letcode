# Registro de Estudo Diário

## Sumário

- [Dia 01 - Estudo do Capítulo 1 e 2 de React](#01082024)
- [Dia 02 - Estudo do capítulo 3 e 4 de React](#02082024)
- [Dia 03 - Estudo do capítulo 5 e 6 de React](#03082024)
- [Dia 04 - Estudo do capítulo 7 e 8 de React](#05082024)

---

## 01/08/2024

### Capítulos Estudados

#### 1. **Capítulo 1: Sobre React e Next.js**

- **Principais Aprendizados:**
  - Visão geral sobre blocos de construção de um aplicativo web moderno.
  - Compreensão introdutória sobre o que é React.
  - Compreensão introdutória sobre o que é Next.js.

- **Resumo:**
  O Next.js é um framework para React que facilita a criação de aplicativos web modernos, abrangendo tanto o lado do cliente quanto o lado do servidor. Ao construir um aplicativo web, é essencial considerar:
  - **Interface do usuário:** Interação do usuário com o aplicativo.
  - **Roteamento:** Navegação entre diferentes partes do aplicativo.
  - **Busca de dados:** Localização e acesso aos dados.
  - **Renderização:** Momento e lugar para renderizar conteúdo estático ou dinâmico.
  - **Integração:** Conexão com serviços de terceiros (CMS, autenticação, pagamentos, etc.).
  - **Infraestrutura:** Local de implantação e execução do código (sem servidor, CDN, edge, etc.).
  - **Desempenho:** Otimização para usuários finais.
  - **Escalabilidade:** Adaptação ao crescimento da equipe, dados e tráfego.
  - **Experiência do desenvolvedor:** Facilidade de criar e manter o aplicativo.

  O React facilita a construção de interfaces de usuário interativas, mas pode exigir configurações adicionais. O Next.js simplifica esse processo, gerenciando ferramentas e configurações, e oferecendo estrutura, recursos e otimizações adicionais. Pode ser integrado gradualmente aos projetos, abordando questões como roteamento, busca de dados e armazenamento em cache, proporcionando uma solução mais robusta e eficiente.

#### 2. **Capítulo 2: Renderização de interfaces de usuário (IU)**

- **Principais Aprendizados:**
  - Compreensão introdutória sobre o DOM.
  - Compreensão geral sobre a renderização das interfaces de usuário.

- **Resumo:**
  Quando um usuário visita uma página web, o servidor retorna um arquivo HTML para o navegador. O navegador então lê e constrói (ou renderiza) o Document Object Model (DOM). Sobre o DOM:
  - Representa a estrutura dos elementos HTML em forma de árvore.
  - Atua como intermediário entre o código e a interface do usuário.
  - Possui uma estrutura hierárquica com relacionamentos de pai e filho.
  - Permite a manipulação, alteração de estilo e modificação do conteúdo de elementos específicos.

---

## 02/08/2024

### Capítulos Estudados

#### 1. **Capítulo 3: Atualizando a IU com Javascript**

- **Principais Aprendizados:**
  - Contrução de um projeto usando JavaScript para manipulação do DOM.
  - Diferença entre DOM e HTML.
  - Diferença entre programação imperativa e declarativa.
 
- **Resumo:**
  Ao adicionar elementos ao DOM via código, como demonstrado no exemplo do Capítulo 3, é possível observar a diferença entre o HTML e o DOM. Usando as ferramentas de desenvolvimento do navegador, pode-se verificar a inclusão dos elementos no DOM, que não está refletida no código-fonte original (o arquivo HTML que foi contruído no decorrer do Capítulo 3).
  - HTML: representa o **conteúdo inicial da página**;
  - DOM: representa o **conteúdo atualizado da página**, alterado pelo código JavaScript.
  Manipular o DOM com JavaScript puro (sem bibliotecas ou frameworks adicionais) é uma abordagem poderosa, porém mais verbosa e complexa. Este método exige mais escrita de código e pode ser mais difícil de manter e entender em projetos maiores, comparado a outras abordagens que abstraem e simplificam essas tarefas.
  - Programação imperativa: descreve as etapas de **como** a interface do usuário deve ser atualizada, semelhante a dar instruções passo a passo a um chef sobre como fazer uma pizza.
  - Programação declarativa: declara **o que** a interface do usuário deve mostrar, como pedir uma pizza sem se preocupar com os passos necessários para fazê-la.
  O React é uma biblioteca declarativa em que os desenvolvedores indicam ao React o que desejam que aconteça com a interface do usuário, e o React se encarrega das etapas necessárias para atualizar o DOM.

#### 2. **Capítulo 4: Introdução ao React**

- **Principais Aprendizados:**
  - Refatoração do código JavaScript e adição da biblioteca React.
  - Compreensão sobre o que é JSX.

- **Resumo:**
  - `ReactDOM.createRoot()`: Cria uma raiz para renderizar componentes React dentro de um nó DOM do navegador.
  - `root.render()`: Renderiza o código React no DOM.

  JSX é uma sintaxe semelhante ao HTML usada no JavaScript para descrever a interface do usuário. Como os navegadores não entendem JSX, é necessário utilizar um compilador como o Babel para convertê-lo em JavaScript. A refatoração de código JavaScript puro para React pode resultar em uma redução no código redundante, uma vez que o React é uma biblioteca que fornece componentes reutilizáveis para gerenciar a interface do usuário.

---

## 03/08/2024

### Capítulos Estudados

#### 1. **Capítulo 5: Construindo UI com Componentes**

- **Principais Aprendizados:**
  - Conceitos básicos do React.
  - Estrutura e criação de componentes em React.
  - Contrução de um componente.

- **Resumo:**
Os conceitos fundamentais do React incluem os **componentes**, que são as unidades básicas da interface, as **props**, utilizadas para passar dados entre eles, e o **state**, que gerencia o estado interno de cada componente.
**Componentes em React:**
  - **Componentes:** Blocos de construção da interface do usuário. Cada componente encapsula uma funcionalidade ou parte da interface, tornando-se independente e reutilizável. Isso facilita a manutenção e a reutilização do código.
    - **Definição e Funcionamento:** No React, um componente é uma função que retorna elementos de UI. Deve começar com letra maiúscula para diferenciar de elementos HTML e código JavaScript.
    - **Sintaxe:** Componentes são definidos entre colchetes angulares `<>`, similar às tags HTML.
  - **Aninhamento de Componentes:** Componentes React podem ser aninhados uns dentro dos outros, formando uma árvore de componentes, assim como os elementos HTML.

#### 2. **Capítulo 6: Exibindo dados com props**

- **Principais Aprendizados:**
  - Contrução de uma propriedade.
  - Criação e uso de propriedades (props) em React.
  - Utilização de variáveis em JSX e iteração por listas.

- **Resumo:** Em React, componentes podem aceitar argumentos personalizados chamados "props". Esses props modificam o comportamento ou a aparência do componente quando ele é renderizado.
  - **Fluxo de dados:** No React, os dados fluem de cima para baixo na árvore de componentes, seguindo um fluxo de dados unidirecional.
  - **Componentes aninhados:** Props podem ser passadas dos componentes pais para os filhos, permitindo a customização de componentes aninhados.
  - **Desestruturação:** Props são objetos que podem ser desestruturados diretamente nos parâmetros da função para facilitar o acesso aos seus valores. Para utilizar esses valores em tags HTML de componentes, insere-se a variável entre chaves, conforme a sintaxe JSX, que permite a inclusão de JavaScript dentro da marcação.
  - **Uso em JSX:** Qualquer expressão JavaScript pode ser adicionada dentro das chaves, incluindo:
    - Propriedades de objeto
    - Literais de modelo
    - Valores retornados de funções
    - Operadores ternários
  - **Iteração por Listas:** Dentro dos componentes, é possível iterar por listas e utilizar métodos de array para manipular os dados e gerar elementos de UI. O React precisa identificar os itens de forma única, por isso é necessário adicionar a `key` com elementos únicos para que ele saiba quais elementos atualizar no DOM.

---

## 05/08/2024

### Capítulos Estudados

#### 1. **Capítulo 7: Adicionando interatividade com o estado**

- **Principais Aprendizados:**
  - Contrução de um manipulador de estado.
  - Compreensão sobre manipuladores de estado e eventos.
  - Compreensão sobre estado e hooks.

- **Resumo:** Os eventos em React são escritos em camelCase e permitem que o aplicativo responda a interações do usuário, como cliques, toques e movimentos do mouse. Para isso, define-se uma função que manipula esses eventos.
  - React utiliza hooks para adicionar lógica aos componentes, como o gerenciamento de estado.
  - Estado refere-se a qualquer informação na interface do usuário que muda ao longo do tempo devido a interações do usuário.
  
  O hook `useState()` é empregado para gerenciar o estado em componentes React, permitindo armazenar e atualizar valores, como a contagem de cliques em um botão. Ao usar `useState()`, retorna-se um array que pode ser desestruturado para   acessar e manipular esses valores.
  - O primeiro item do array é o valor do estado, que deve ser nomeado de forma descritiva.
  - O segundo item é a função para atualizar o valor, geralmente prefixada com "set", seguido do nome do estado.
  - O valor inicial do estado é definido passando um argumento para o hook, como `React.useState(0)`.

  **Props vs. State**
    - **Props:** Informações somente leitura passadas para componentes.
    - **State:** Informações que podem mudar ao longo do tempo, geralmente devido a interações do usuário.

> [!NOTE]
>
> O estado é iniciado e armazenado dentro de um componente e pode ser passado para componentes filhos como props. Contudo, a lógica para atualizar o estado deve permanecer no componente onde foi criado.

#### 2. **Capítulo 8: Do React ao Next.js**

- **Principais Aprendizados:**
  - Visão geral do que foi aprendido dos Capítulos 1 a 8 (conceitos e código).
  - Métodos de aprendizado do React.
  - Visão geral do que será apresentado nos próximos capítulos.
  - Visão geral de como o Next.js facilita a construção de aplicativos React.

- **Resumo:** Neste capítulo, foi apresentado um panorama dos conceitos e códigos abordados até o momento, com ênfase em três elementos essenciais para o desenvolvimento em React: **componentes**, **props** e **state**.

A prática é fundamental para o aprendizado efetivo de qualquer tecnologia. Portanto, é possível integrar o React gradualmente em um site existente utilizando a tag `<script>` para adicionar pequenos componentes. No entanto, a criação de uma aplicação completa com React proporciona uma experiência mais rica e proveitosa tanto para o usuário quanto para o desenvolvedor.

Embora o React ofereça muitos benefícios na construção de interfaces, o desenvolvimento de aplicativos escaláveis exige um maior esforço, conhecimento avançado e uma estrutura inicial apropriada, como os recursos mais recentes, como **Server** e **Client Components**. Para otimizar esse processo, o framework Next.js foi criado para simplificar a instalação e configuração, além de oferecer funcionalidades adicionais que facilitam a construção de aplicativos React escaláveis.

---
