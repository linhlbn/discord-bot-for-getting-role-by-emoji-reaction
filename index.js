const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const token = 'Nzk5NjM5OTAxMDQwODAzODcw.YAGgsA.t6nN_sJjcbvfyXGGk7DTYvuXOK0'
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
client.on('message', msg => {
    if (msg.content === 'Hi Moleju') {
        msg.reply("Moleju chào bạn ʕ•́ᴥ•̀ʔっ");
    }
})
 
 
client.on('ready', () => {
    console.log('Moleju is online!');
});
 
 
client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Discord, client);
    }
  
});
 
client.login(token);