# Documentação: Instalação do Go para a Versão 1.22.6

## Objetivo

Remover a instalação atual do Go e instalar a nova versão `go1.22.6.linux-amd64.tar.gz`.

## Passos

### 1. Remover a Instalação Atual

Para remover a instalação existente do Go, siga os passos abaixo:

1. **Remover o binário do Go**:

   Execute o comando abaixo para remover o binário do Go, geralmente localizado em `/usr/bin/go`:

   ```sh
   sudo rm -rf /usr/bin/go
   ```

2. **Remover diretórios adicionais do Go**:

   Caso o Go esteja instalado em diretórios adicionais, remova-os com os seguintes comandos:

   ```sh
   sudo rm -rf /usr/local/go
   sudo rm -rf /usr/lib/go
   sudo rm -rf /usr/share/go
   sudo rm -rf /usr/share/man/man1/go.1.gz
   ```

### 2. Instalar a Nova Versão do Go

Para instalar a nova versão `go1.22.6.linux-amd64.tar.gz`, siga os passos abaixo:

1. **Baixar o arquivo de instalação**:

   Use o comando `wget` para baixar o arquivo da nova versão do Go:

   ```sh
   wget https://go.dev/dl/go1.22.6.linux-amd64.tar.gz
   ```

2. **Extrair o arquivo**:

   Extraia o conteúdo do arquivo para o diretório `/usr/local` usando o comando `tar`:

   ```sh
   sudo tar -C /usr/local -xzf go1.22.6.linux-amd64.tar.gz
   ```

3. **Configurar variáveis de ambiente**:

   - Edite seu arquivo de perfil para configurar as variáveis de ambiente necessárias. Você pode usar `nano`, `vim`, ou outro editor de texto. Abra o arquivo `~/.profile`:

     ```sh
     nano ~/.profile
     ```

   - Adicione as seguintes linhas ao final do arquivo para definir as variáveis de ambiente:

     ```sh
     export GOROOT=/usr/local/go
     export GOPATH=$HOME/go
     export PATH=$GOROOT/bin:$GOPATH/bin:$PATH
     ```

   - Salve e feche o arquivo.

4. **Recarregar o perfil** para aplicar as mudanças:

   ```sh
   source ~/.profile
   ```

5. **Verificar a instalação**:

   Verifique se a nova versão do Go foi instalada corretamente executando o comando:

   ```sh
   go version
   ```

   O comando deve exibir a versão `go1.22.6`, confirmando que a instalação foi bem-sucedida.
