const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528300898624208897")
setInterval(function() {
channel.send(`ارحبووو`);
}, 30)
})

client.login('528307636492435456.JAL8WS5QGxP6LCKAm-JveBew-P4')
