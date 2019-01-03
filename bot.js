const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const seender = 'لعمل منشن لمرسل الرساله قم بكتابة [المرسل] في الرسالة.';
const server = 'لكتابة اسم السيرفر قم بكتابة [السيرفر] في الرسالة.';
const user = 'لعمل منشن للشخص قم بكتابة [العضو] في الرسالة.';
client.on('ready', () => {
	console.log(`logged as$ {client.user.tag}`);
	console.log(`Guilds: ${client.guilds.size}`);
	console.log(`Users: ${client.users.size}`);
	client.user.setGame(`${prefix}help + ${prefix}invite | ${client.guilds.size} server.`, "https://twitch.tv/Musicbot")

});

client.on('message', message => {
  if(message.content === prefix + 'stats') {
    message.channel.send('**I have `' + `${client.guilds.size}` + '` Server :fire:, `' + `${client.channels.size}` + '` Channels and `' + `${client.users.size}` + '` users.**')
    message.channel.send('**- If you want me to join in your server? just do `' + `${prefix}invite` + '` **');
  }
});

client.on('guildCreate', (guild) => {

var eeee = `**★-----------------------------------------------------★
                         ❥ New Server !

                         ● Name: ${guild.name}
                         ● Owner: <@${guild.ownerID}>
                         ● Members: ${guild.memberCount}
★-----------------------------------------------------★**`;
client.user.setGame(`${prefix}help + ${prefix}invite | ${client.guilds.size} server.`, "https://twitch.tv/Musicbot")
client.users.get('451162715981873173').send(eeee)
})


client.on('guildDelete', (guild) => {

var eeee2 = `**★-----------------------------------------------------★
                         ❥ We lost a server :frowning2:

                         ● Name: ${guild.name}
                         ● Owner: <@${guild.ownerID}>
                         ● Members: ${guild.memberCount}
★-----------------------------------------------------★**`;
client.user.setGame(`${prefix}help + ${prefix}invite | ${client.guilds.size} server.`, "https://twitch.tv/Musicbot")
client.users.get('451162715981873173').send(eeee2)
})



client.on('message', msg => {
	if(msg.content.startsWith('!alert')) {
	if(msg.author.id !== '451162715981873173') return;
    let args = msg.content.split(' ').slice(1).join(' ');
if(msg.channel.type === 'dm') return;
msg.channel.send('Done ... Message has been sent to ' + client.users.size + 'User !')
client.users.forEach(u => {
u.send(args)
})
    }
})



client.on('message', message => {
   if(!message.channel.guild) return;
	var success = new Discord.RichEmbed()
	.setDescription(`تم أرسال رسالتك بنجاح.`)
	.setColor('GREEN')
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('Send Messages')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**▶ 📝 لأرسال رسالة امبد قم بالضغط على \n ▶ ✏ لأرسال رسالة عادية قم بالضغط على \n ★ ${user} \n ★ ${server} \n ★ ${seender}**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(success);
message.guild.members.forEach(m => {
let EmbedRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setFooter(`${prefix}invite | لدعوة برودكاست بوت`)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(success);
message.guild.members.forEach(m => {
let NormalRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});


var help = `**★ BroadCast | برود كاست بوت 

:ماهو الـبرودكاست؟ ★

★ هو عبارة عن أرسال رسالة جماعية وترسل هذه الرسالة الى كل عضو في السيرفر ولهذا؟ وفرنا لكم برودكاست بوت يمكنكم من خلاله ارسال الرسائل الجماعية الى اعظاء سيرفرك والخ ..

ماهي مميزات البوت؟:

★ يعمل بشكل يومي وعلى مدار الساعة بدون __توقف__.

★ يعمل على خوادم سريعة ويصل البنق الى 18.

★ يتم أرسال رسائلك فوراً وبسرعه عالية.

★ varيحتوي على نظام الـ

★ varماهو نظام الـ

★ ${seender}

★ ${user}

★ ${server}

★ كيف أرسل البرود كاست؟:

★ ومن بعدها أختيار امبد ام رسالة عادية وسترسل الرسالة بنجاح ${prefix}bc يمكنك ارسال البرودكاست عن طريق أمر.

★ رابط دعوة البوت؟ :

★ أو الضغط على الرابط التالي ${prefix}invite يمكنك دعوة البوت عن طريق كتابة 

★ https://discordapp.com/oauth2/authorize?client_id=471886246684262410&scope=bot&permissions=8


★ شكراً لكم.

★ .PlayTeam من أعداد وتطوير فريق

★ https://discord.gg/39FksCH :الدعم الفني
**`;




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {
		 message.channel.send('**تم أرسال رابط دعوة البوت ، شيك خاصك**');
 message.author.sendMessage(`**
				لدعوة البوت : 
				للأرسال 'ADMINSTRATION' ملاحظة: يتطلب برمشن 
	 :link: Link, : https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8


	★ https://discord.gg/39FksCH :الدعم الفني



	 **`);

    }
});

client.on('message', message => {
	if(message.author.bot) return;
	if(message.content === prefix + 'help') {
		
		return message.channel.sendMessage(help);
		
	}
});


client.login(process.env.TOKEN)
