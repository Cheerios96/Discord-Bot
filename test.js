const Discord = require('discord.js');
 const client = new Discord.Client();
//tester();
client.once('ready', () => {
  console.log('Logged in!'); // outputs to console when bot has connected to server
});
call();
function tester () {
  client.once('ready', () => {
	console.log('Ready!');
});
  client.on('message', message => {
    console.log(message.content);
  });
  client.login('ODAyMDMwMDIyNjU4NzUyNTI0.YApSqg.l4HdAXMivrvIm5lhvwpJC86Sy4A');

}

function call () { //function to join audio call
client.on("ready", () => {
  client.on('message', message => {
    const channel = client.channels.cache.get("802029037060882447");
     if (!channel) return console.error("The channel does not exist!");
     if (message.content === '!join') return channel.join().then(connection => { //checks for specific command to join
       console.log("Joined voice chat");
     }).catch(e => {
       if (message.content === '!leave') return channel.leave().then(connection => { //checks for specific command to leave
         console.log("Joined voice chat");
       }).catch(e => {
       })
       console.error(e);
     });
         // Oh no, it errored! Let's log it to console :)
     });
  });

}


async function invitePerson () {
client.on('message', msg => {
 if (msg.content === '!invite') {
   const invite =  msg.channel.createInvite(
    {
      maxUses: 1
    });
    `Requested with command by ${msg.author.tag}`
   msg.reply(`Here is your invite: ${invite}`);

 }
 });
}




client.login('ODAyMDMwMDIyNjU4NzUyNTI0.YApSqg.l4HdAXMivrvIm5lhvwpJC86Sy4A');
