module.exports = {
    name: "help",
    description: "this is a embed",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#712e81")
        .setTitle("HELP")
        .setURL("")
        .setDescription("**AP/DP Bracket = !apdp \nCaphras = !caphras, !c, !cp \nMusik = !play, !skip, !stop**")
//        .addFields(
//            {name: "Rule#1:", value: ":zap:  **Der generelle Umgangston sollte höflich und freundlich gegenüber den anderen sein!**"},
//            {name: "Rule#2:", value: ":zap:  Im Text- und Sprachchat sind **Streitigkeiten, Beleidigungen, Provokation und Spam nicht erlaubt!**"},
//            {name: "Rule#3:", value: ":zap: ** Die Anweisungen der Admin's ist stets folge zu leisten.**"},
//            {name: "Rule#4:", value: ":zap:  Unsere **Server-Sprache ist Deutsch/Englisch.**"},
//            {name: "Rule#3:", value: ":zap:  Um es kurz zu fassen, **sei einfach kein Muruk!**"}
//        )
// [Discord-Richtlinien!](https://discordapp.com/guidelines)
        .setImage("https://cdn.discordapp.com/attachments/512424539364524032/889141493317644318/unnamed.jpg")
        .setTimestamp()
        .setFooter("");
        message.channel.send(newEmbed);
    }


}