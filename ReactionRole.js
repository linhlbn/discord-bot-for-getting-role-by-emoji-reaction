module.exports = {
    name: 'rr',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '786151383270817825'; // test channel

        // add Role into Variables
            // role in games
        const satThu = message.guild.roles.cache.find(role => role.name === "Sat Thu");
        const dauSi = message.guild.roles.cache.find(role => role.name === "Dau Si");
        const xaThu = message.guild.roles.cache.find(role => role.name === "Xa Thu");
        const hoTro = message.guild.roles.cache.find(role => role.name === "Ho Tro");
        const doDon = message.guild.roles.cache.find(role => role.name === "Do Don");
        const phapSu = message.guild.roles.cache.find(role => role.name === "Phap Su");
            // role in laning
        const ADC = message.guild.roles.cache.find(role => role.name === "ADC");
        const JUNG = message.guild.roles.cache.find(role => role.name === "JUNG");
        const MID = message.guild.roles.cache.find(role => role.name === "MID");
        const SUPP = message.guild.roles.cache.find(role => role.name === "SUPP");
        const TOP = message.guild.roles.cache.find(role => role.name === "TOP");
        
        // add emoji

        const satThu_emoji = '⚔️';
        const dauSi_emoji = '🥊';
        const xaThu_emoji = '🏹';
        const hoTro_emoji = '🩹';
        const doDon_emoji = '💪';
        const phapSu_emoji = '🧙';
        const ADC_emoji = '🔵';
        const JUNG_emoji = '⚪';
        const  MID_emoji = '🟡';
        const SUPP_emoji = '🟢';
        const TOP_emoji = '🟤';
        
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Chọn role và lane main của mình nha ae (っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )')
            .setDescription('Add your role here: \n\n'
                + `${satThu_emoji} nếu mah feng main Sát Thủ\n`
                + `${dauSi_emoji} nếu mah feng main Đấu Sĩ\n`
                + `${xaThu_emoji} nếu mah feng main Xạ Thủ\n`
                + `${hoTro_emoji} nếu mah feng main Hỗ Trợ\n`
                + `${doDon_emoji} nếu mah feng main Đỡ Đòn\n`
                + `${phapSu_emoji} nếu mah feng main Pháp Sư\n`
                + `${ADC_emoji} nếu mah feng main ADC\n`
                + `${JUNG_emoji} nếu mah feng main JUNG\n`
                + `${MID_emoji} nếu mah feng main MID\n`
                + `${SUPP_emoji} nếu mah feng main SUPP\n`
                + `${TOP_emoji} nếu mah feng main TOP`);
 
        let messageEmbed = await message.channel.send(embed);
        // add react to emoji
        messageEmbed.react(satThu_emoji);
        messageEmbed.react(dauSi_emoji);
        messageEmbed.react(xaThu_emoji);
        messageEmbed.react(hoTro_emoji);
        messageEmbed.react(doDon_emoji);
        messageEmbed.react(phapSu_emoji);
        messageEmbed.react(ADC_emoji);
        messageEmbed.react(JUNG_emoji);
        messageEmbed.react(MID_emoji);
        messageEmbed.react(SUPP_emoji);
        messageEmbed.react(TOP_emoji);
        
        
        // add message reaction
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === satThu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(satThu);
                }
                if (reaction.emoji.name === dauSi_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dauSi);
                }
                if (reaction.emoji.name === xaThu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(xaThu);
                }
                if (reaction.emoji.name === hoTro_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hoTro);
                }
                if (reaction.emoji.name === doDon_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(doDon);
                }
                if (reaction.emoji.name === phapSu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(phapSu);
                }
                if (reaction.emoji.name === ADC_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ADC);
                }
                if (reaction.emoji.name === JUNG_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(JUNG);
                }
                if (reaction.emoji.name === MID_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MID);
                }
                if (reaction.emoji.name === SUPP_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SUPP);
                }
                if (reaction.emoji.name === TOP_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TOP);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === satThu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(satThu);
                }
                if (reaction.emoji.name === dauSi_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(dauSi);
                }
                if (reaction.emoji.name === xaThu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(xaThu);
                }
                if (reaction.emoji.name === hoTro_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(hoTro);
                }
                if (reaction.emoji.name === doDon_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(doDon);
                }
                if (reaction.emoji.name === phapSu_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(phapSu);
                }
                if (reaction.emoji.name === ADC_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(ADC);
                }
                if (reaction.emoji.name === JUNG_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(JUNG);
                }
                if (reaction.emoji.name === MID_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(MID);
                }
                if (reaction.emoji.name === SUPP_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(SUPP);
                }
                if (reaction.emoji.name === TOP_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.romove(TOP);
                }
            } else {
                return;
            }
        });
    }
 
}   