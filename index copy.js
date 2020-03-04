const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const PREFIX = '!';
var version = '0.0.2'
bot.on('ready', () =>{
    console.log('SDB Bot is online');
})
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'zas':
            message.channel.send('Ik ben Wilco.')
            break;
        case 'website':
            message.channel.send('google.com')
            break;
            case 'info':
                if(args[1] === 'versie'){
                    message.channel.send('Versie: ' + version);
                }else{
                     message.channel.send('Specificeer het commando.')
                }
                    break;
                case 'clear':
                    if (!args[1]) return message.reply('Specificeer het commando. !clear aantal_berichten')
                    message.channel.bulkDelete(args[1])
                case 'embed':
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Gebruikers Informatie')
                    .addField('Player Name', message.author.username)
                    .setColor(0x9B59B6)
                    .setThumbnail(message.author.displayAvatarURL())
                    message.channel.send(embed);
                    break;
    }
})
bot.login(token);