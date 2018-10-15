const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
	    client.user.setGame(`Mgazeb seerver`,'https://www.twitch.tv/v5bz');
	console.log('----');
	console.log('fouly is here')
	console.log('----')
});


//Role react
   
   const yourID = "422829377139638273";
const setupCMD = ".rolereact"
let initialMessage = '';
const roles = ["| - Paladins", "| - Fortnite", "| - GTA V", "| - League of legends","| - Creative Destruction", "| - Overwatch"];//رتب
const reactions = ["🎮", "🎮", "🎮", "🎮", "🎮", "🎮", ];//رياكشن

if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";


function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); 
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})

client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

//photo

         client.on('message', message => {
            if (message.content === '3242343') {
              message.channel.send('');
              message.channel.sendFile("https://media.discordapp.net/attachments/485135117472235543/491681083574845440/Untitled-1.png");
               

            }
});




         client.on('message', message => {
            if (message.content === '777') {
              message.channel.send('');
              message.channel.sendFile("https://media.discordapp.net/attachments/485135117472235543/493036286114922496/Untitled-1.png");
               

            }
});

client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355106381594644";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}





client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355455494488074";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}




client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355563938217984";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}

 

client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355684977442853";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}

 
 
 

client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355828607320074";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}
 
 
 

client.on("voiceStateUpdate", (old, new1) => {
    var channel = "493355951307358208";
    var role = "| - Playing now"
    لول(old,new1,channel,role);
});

function لول(o,n,channel,role){
    if (!o.voiceChannel && n.voiceChannel) {
        if (n.voiceChannelID == channel) {
            n.addRole(n.guild.roles.find("name", role));
        };
    } else if (o.voiceChannel && !n.voiceChannel) {
        if (o.voiceChannelID == channel) {
            n.removeRole(n.guild.roles.find("name", role))
        }
    }
}
 
client.login(process.env.BOT_TOKEN);
