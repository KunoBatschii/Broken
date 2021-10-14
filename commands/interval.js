module.exports = {
    name: "velltimer",
    aliases: ["starttimer"],
    description: "World boss Timer",
    execute(message, args, cmd, client, Discord){
        setInterval(() => {
            message.channel.send("Vell spawn in 15mi");
        }, 5000)
    }
}