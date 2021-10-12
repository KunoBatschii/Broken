module.exports = {
    name: "bdo",
    aliases: ["bb", "bdoceck", "kiki"],
    description: "this is a bdo command!",
    execute(message, args, cmd, client, Disocrd){

        if(message.member.roles.cache.has("887290352267051029")){
            message.channel.send("blackdesertonline!")


        }else{
            message.channel.send("Try it again then it work ^^");
            message.member.roles.add("887290352267051029").catch(console.error); //add  oder remove ^^
        }

    }
}