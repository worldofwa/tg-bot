const TOKEN = '535002576:AAHd9_AQB2uYhSivA28TTp0CAZG5CFzs96k'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot (TOKEN, {polling:true})
var notes = [];

bot.onText(//напомни (.+) в (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    notes.push( { 'uid':userId, 'time':time, 'text':text } );

    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});
