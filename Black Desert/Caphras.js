module.exports = {
    name: "caphras",
    aliases: ["c", "cp"],
    description: "caphras rechner",
    execute(message, args, cmd, client, Discord){
        message.channel.send("https://garmoth.com/caphras-calculator")
    }
}