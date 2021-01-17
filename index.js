const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const token = '____' //sercret

const channel_key = '____'; //my channel-info - sercret

const satThu_emoji = '⚔️', assassin_role = '____'; //sercret
const dauSi_emoji = '🥊', cruiser_role = '____'; //sercret
const xaThu_emoji = '🏹', maskman_role = '____'; //sercret
const hoTro_emoji = '🩹', support_role = '____'; //sercret
const doDon_emoji = '💪', tanker_role = '____'; //sercret
const phapSu_emoji = '🧙', mage_role = '____'; //sercret
const ADC_emoji = '🔵', adc_role = '____'; //sercret
const JUNG_emoji = '⚪', jungle_role = '____'; //sercret
const  MID_emoji = '🟡', mid_role = '____'; //sercret
const SUPP_emoji = '🟢', supp_role = '____'; //sercret
const TOP_emoji = '🟤', top_role = '____'; //sercret

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
 
 
client.on('message', async message => {
    const prefix = '-';
    

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'role') {
        let embed = new Discord.MessageEmbed()
        .setTitle('LẤY ROLES League of Legend')
        .setDescription('Các anh em BIT hãy react emote để lấy role nhé! Ví dụ main mid và sát thủ thì hãy click vào emote ⚔️ và 🟡')
        .setColor('#64FFDA')
        .addField('Nếu feng main Sat Thu?', 'Hãy react ' + satThu_emoji, true)
        .addField('Nếu feng main Dau Si?', 'Hãy react ' + dauSi_emoji, true)
        .addField('Nếu feng main Xa Thu?', 'Hãy react ' + xaThu_emoji, true)
        .addField('Nếu feng main Ho Tro?', 'Hãy react ' + hoTro_emoji, true)
        .addField('Nếu feng main Do Don?', 'Hãy react ' + doDon_emoji, true)
        .addField('Nếu feng main Phap Su?', 'Hãy react ' + phapSu_emoji, true)
        .addField('Nếu feng main ADC?', 'Hãy react ' + ADC_emoji, true)
        .addField('Nếu feng main JUNG?', 'Hãy react ' + JUNG_emoji, true)
        .addField('Nếu feng main MID?', 'Hãy react ' + MID_emoji, true)
        .addField('Nếu feng main SUPP?', 'Hãy react ' + SUPP_emoji, true)
        .addField('Nếu feng main TOP?', 'Hãy react ' + TOP_emoji, true)
        
        
        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(satThu_emoji) 
        messageEmbed.react(dauSi_emoji) 
        messageEmbed.react(xaThu_emoji) 
        messageEmbed.react(hoTro_emoji) 
        messageEmbed.react(doDon_emoji) 
        messageEmbed.react(phapSu_emoji) 
        messageEmbed.react(ADC_emoji) 
        messageEmbed.react(JUNG_emoji) 
        messageEmbed.react(MID_emoji) 
        messageEmbed.react(SUPP_emoji) 
        messageEmbed.react(TOP_emoji) 
    }
  
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === channel_key) {
        if (reaction.emoji.name === satThu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(assassin_role)
        }
        if (reaction.emoji.name === dauSi_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(cruiser_role)
        }
        if (reaction.emoji.name === xaThu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(maskman_role)
        }
        if (reaction.emoji.name === hoTro_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(support_role)
        }
        if (reaction.emoji.name === doDon_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(tanker_role)
        }
        if (reaction.emoji.name === phapSu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(mage_role)
        }
        if (reaction.emoji.name === ADC_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(adc_role)
        }
        if (reaction.emoji.name === JUNG_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(jungle_role)
        }
        if (reaction.emoji.name === MID_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(mid_role)
        }
        if (reaction.emoji.name === SUPP_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(supp_role)
        }
        if (reaction.emoji.name === TOP_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(top_role)
        }
    }
})
 
client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === channel_key) {
        if (reaction.emoji.name === satThu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(assassin_role)
        }
        if (reaction.emoji.name === dauSi_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(cruiser_role)
        }
        if (reaction.emoji.name === xaThu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(maskman_role)
        }
        if (reaction.emoji.name === hoTro_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(support_role)
        }
        if (reaction.emoji.name === doDon_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(tanker_role)
        }
        if (reaction.emoji.name === phapSu_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(mage_role)
        }
        if (reaction.emoji.name === ADC_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(adc_role)
        }
        if (reaction.emoji.name === JUNG_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(jungle_role)
        }
        if (reaction.emoji.name === MID_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(mid_role)
        }
        if (reaction.emoji.name === SUPP_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(supp_role)
        }
        if (reaction.emoji.name === TOP_emoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(top_role)
        }
    }
})


client.login(token);
