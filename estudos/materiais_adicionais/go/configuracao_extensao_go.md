## Configuração da Extensão Go no VS Code

### Problema

Ao tentar configurar a extensão Go no VS Code para ativar todas as suas funcionalidades, você pode encontrar o seguinte problema:

```
2024-08-07 14:58:55.291 [info] Try to start language server - activation (enabled: false)
2024-08-07 14:58:55.292 [warning] Language server is disabled
2024-08-07 16:01:41.807 [info] failed to run "/usr/bin/go version": Error: spawn /usr/bin/go ENOENT cwd: /home/kiane/Área de Trabalho/ama-room
2024-08-07 16:01:41.810 [error] failed to run "go version" with "/usr/bin/go". Provide a valid path to the Go binary
```

### Solução

Parece que o VS Code está tentando usar um binário do Go em `/usr/bin/go`, que não existe ou não está correto. Para resolver isso, siga os passos abaixo:

1. **Verificar e Atualizar o Link Simbólico**

   O erro sugere que algum processo ou configuração ainda está apontando para `/usr/bin/go`. Verifique se há algum link simbólico nesse local:

   - **Verifique se há um link simbólico em `/usr/bin/go`**:

     ```sh
     ls -l /usr/bin/go
     ```

   - Se houver um link simbólico, ele pode estar apontando para um binário inexistente. Remova o link simbólico:

     ```sh
     sudo rm /usr/bin/go
     ```

   - **Criar um link simbólico para o binário correto do Go**:

     Se você precisa que o binário do Go esteja em `/usr/bin/go`, você pode criar um link simbólico para o local correto:

     ```sh
     sudo ln -s /usr/local/go/bin/go /usr/bin/go
     ```

2. **Verificar se o `go` está acessível**

   Teste se o comando `go` está funcionando corretamente:

   ```sh
   go version
   ```

   Isso deve exibir a versão do Go se tudo estiver configurado corretamente.

### Configuração da Extensão Go no VS Code

Para garantir que a extensão Go no VS Code funcione corretamente, siga estes passos:

1. **Abrir o menu de instalação de ferramentas da extensão Go**:

   - Pressione `Ctrl+Shift+P` para abrir a paleta de comandos do VS Code.
   - Digite `Go: Install/Update Tools` e selecione essa opção.

   ![Print do menu de instalação de ferramentas da extensão Go no VS Code](/estudos/materiais_adicionais/imagens/paleta-comandos.png)

2. **Selecionar e instalar ferramentas necessárias**:

   - Após selecionar `Go: Install/update tools`, será exibida uma lista de ferramentas necessárias para a extensão Go.
   - Selecione todas as opções da lista e pressione o botão **OK** para instalar as ferramentas.

### Verificação

Após instalar as ferramentas, verifique se a extensão Go está funcionando corretamente e se todas as funcionalidades estão ativadas. Reinicie o VS Code, se necessário, para aplicar as alterações.
