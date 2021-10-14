module.exports = {
    name: "status",
    aliases: [""],
    description: "this is set status!",
  execute(message, args, cmd, client, Disocrd){
    let totalUsers = client.guilds.cache.reduce((users, value) => users + value.memberCount, 0)
    let totalGuilds = client.guilds.cache.size
    console.log('\x1b[32m%s\x1b[0m', `$[INFO] Logged as ${client.user.tag}`)
    console.log('\x1b[31m%s\x1b[0m', `$[INFO] Members: ${totalUsers}`)
    console.log('\x1b[31m%s\x1b[0m', `$[INFO] Guilds: ${totalGuilds}`)
    var activities = [
      `Working at ${client.guilds.cache.size} servers!`,
      `Servicing ${totalUsers} users!`, 
      `I Work for Undead!` 
      ], i = 0;
  setInterval(() => client.user.setActivity(`!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),15000)
  }
}