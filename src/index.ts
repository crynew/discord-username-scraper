import { Client } from 'discord.js-selfbot-v13';

const client = new Client({});

const usernameSniper = "" 

client.on('ready', () => {
  console.log(`[Client] Conectado: ${client.user?.tag}!`);
});

client.on('userUpdate', async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    if (newUser.username === usernameSniper) {
      console.log(`O username desejado '${usernameSniper}' foi liberado!`);
    } else {
      console.log(`O usuário ${oldUser ? oldUser.tag: oldUser.username } mudou o nome de usuário para ${newUser.username}`);
    }
  }
});

client.login('TOKEN'); 
