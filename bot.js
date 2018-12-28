const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528300898624208897")
setInterval(function() {
channel.send(`ارحبووو`);
}, 30)
})

client.login('NTI2OTcyNzA3NDAxNzYwNzc4.DwgSkw.gAiZe1cXifSJSCEfHbdJ9xKlpCU');
