# Documentação de Instalação da Ferramenta `tern` para Go

Esta documentação descreve o processo de instalação da ferramenta `tern` para análise de código em projetos Go.

## Pré-requisitos

Antes de iniciar a instalação, certifique-se de que você possui os seguintes pré-requisitos:

- **Go instalado**: Verifique se o Go está instalado e configurado em seu sistema. Você pode verificar isso com o comando:
  ```bash
  go version
  ```

## Passos para Instalação

### 1. Instale a Ferramenta `tern`

Para instalar a ferramenta `tern`, use o comando `go install`. Execute o seguinte comando em seu terminal:

```bash
go install github.com/tern-tools/tern@latest
```

### 2. Configure o PATH

Se o diretório binário do Go ainda não estiver incluído no seu PATH, adicione-o para garantir que você possa executar o `tern` a partir de qualquer lugar. Adicione a seguinte linha ao seu arquivo de perfil (como `~/.bashrc`, `~/.zshrc`, ou `~/.profile`, dependendo do seu shell):

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

Após adicionar a linha, recarregue o arquivo de perfil com o comando apropriado para seu shell:

```bash
source ~/.bashrc
```

ou

```bash
source ~/.zshrc
```

ou

```bash
source ~/.profile
```

### 3. Verifique a Instalação

Para garantir que a instalação foi bem-sucedida, verifique a versão do `tern` com o comando:

```bash
tern --version
```

Se o comando retornar a versão do `tern`, a instalação foi concluída com sucesso e a ferramenta está pronta para uso.

## Considerações Finais

Agora que o `tern` está instalado, você pode utilizá-lo para analisar e gerar relatórios sobre a estrutura de seus projetos Go.
