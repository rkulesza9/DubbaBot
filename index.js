const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require("./credentials.js");

const prefix = "+chem";

bot.on('ready', () => {
  console.log("Logged in as " + bot.user.tag + "!");
});

bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length+1).split(' ');

  if(args.includes("-u")){
    const taggedUser = msg.mentions.users.first();
    if(taggedUser == null) return;
    msg.channel.send("Don't forget to come to Chem class, <@"+taggedUser.id+"> "+"!");
  }
  if(args.includes("-yt")){
    var yt_videos = [
      "https://www.youtube.com/watch?v=vPQ9a_xIqRg",
      "https://www.youtube.com/watch?v=k3rRrl9J2F4",
      "https://www.youtube.com/watch?v=zp-rZEEQVoY",
      "https://www.youtube.com/watch?v=ZLa6AsmXp50",
      "https://www.youtube.com/watch?v=wJGR5Y-Qqac&list=PLqOZ6FD_RQ7kTjN4O2MNzf5YfeiIx7SGI"
    ];

    var index = Math.floor(Math.random() * yt_videos.length);
    const taggedUser = msg.mentions.users.first();
    if(taggedUser == null) return;
    msg.channel.send('<@'+taggedUser.id+"> "+yt_videos[index]);
  }

});

bot.login(token);
