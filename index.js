const TOKEN = '535002576:AAHd9_AQB2uYhSivA28TTp0CAZG5CFzs96k'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot (TOKEN, {polling:true})
var notes = [];



var stateSetName = false;

bot.onText(/\(.*)/, function (msg, match) {

if(!stateSetName)return;

var name = match[1];
});

bot.onText(/\/setname/, function (msg, match) {
  
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "Введите имя");
stateSetName =true;
    bot.sendMessage(msg.chat.id, `hello, bot say: "HI, ${msg.from.first_name}"`)

 setTimeout(function(){   bot.sendMessage(fromId, "Отмена!"); stateSetName =false;},30000);
});

