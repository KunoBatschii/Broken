module.exports = {
    name: "status",
    aliases: [""],
    description: "this is set status!",
  execute(message, args, cmd, client, Disocrd){
    client.user.setActivity("I work for UndeadSociety", {type:"LISTENING"})
  }
}