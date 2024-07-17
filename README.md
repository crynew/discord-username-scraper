
# Username Scraper e Username Sniper

Este projeto é um bot do Discord que monitora mudanças de nomes de usuário e verifica se um nome de usuário desejado fica disponível. Ele funciona como um scraper de nomes de usuário e um sniper de nome de usuário ao mesmo tempo.

## Funcionalidades

1. **Scraper de Nome de Usuário**: O bot monitora mudanças de nomes de usuário e registra as mudanças no console.
2. **Sniper de Nome de Usuário**: O bot verifica se um nome de usuário específico fica disponível e notifica no console quando isso acontece.

## Configuração

### Requisitos

- Node.js
- Biblioteca `discord.js-selfbot-v13`

### Instalação

1. Instale as dependências:
    ```sh
    npm install discord.js-selfbot-v13 @types/node typescript ts-node --save
    ```

2. Configure o arquivo de código:

    - Abra o arquivo principal do bot (`index.ts`).
    - Defina o nome de usuário desejado na variável `usernameSniper`.

    ```typescript
    const usernameSniper = "USERNAME_DESEJADO";
    ```

3. Adicione o seu token de bot do Discord no código:

    ```typescript
    client.login('SEU_TOKEN_DO_DISCORD');
    ```

## Uso

1. Inicie o bot:
    ```sh
   npx ts-node src/index.ts
    ```

2. O bot se conectará ao Discord e começará a monitorar mudanças de nomes de usuário.

3. Quando um usuário mudar seu nome de usuário, o bot registrará a mudança no console:
    ```
    O usuário oldUsername mudou o nome de usuário para newUsername
    ```

4. Se o nome de usuário desejado (`usernameSniper`) ficar disponível, o bot registrará a seguinte mensagem no console:
    ```
    O username desejado 'USERNAME_DESEJADO' está disponível!
    ```
