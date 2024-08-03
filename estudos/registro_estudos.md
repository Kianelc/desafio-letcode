# Registro de Estudo Diário

## Sumário

- [Dia 01 - Estudo do Capítulo 1 e 2 de React](#01082024)
- [Dia 02 - Estudo do capítulo 3 e 4 de React](#02082024)

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
  - Contrução de um projeto utilizando métodos JavaScript e DOM
    - Manipulação de DOM com JavaScript
  - Diferença entre DOM e HTML
  - Diferença entre programação imperativa e declarativa
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
  - Refatoração do código JavaScript
    - Adição da biblioteca React
  - Compreensão sobre o que é JSX.

- **Resumo:**
  - `ReactDOM.createRoot()`: Cria uma raiz para renderizar componentes React dentro de um nó DOM do navegador.
  - `root.render()`: Renderiza o código React no DOM.
  JSX é uma sintaxe semelhante ao HTML usada em JavaScript para descrever a interface do usuário. Como os navegadores não entendem JSX, é necessário um compilador como o Babel para converter JSX em JavaScript.
  Ao refatorar código JavaScript puro para React, observa-se uma redução no código redundante. O React é uma biblioteca que fornece trechos de código reutilizáveis para gerenciar a interface do usuário.
  
---
