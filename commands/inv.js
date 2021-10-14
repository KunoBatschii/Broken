module.exports = {
    name: "invite",
    aliases: ["inv"],
    description: "invite link",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setDescription("[Klick ME!](https://discord.com/oauth2/authorize?client_id=887277041345503273&scope=bot&permissions=8589934591)")
        message.channel.send(newEmbed);
    }
}