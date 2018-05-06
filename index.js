const TOKEN = '535002576:AAHd9_AQB2uYhSivA28TTp0CAZG5CFzs96k'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot (TOKEN, {polling:true})
var notes;


bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    if(msg.text == 'photo')
      
      bot.sendMessage(chatId, "Введи токен ", {caption: "I'm a bot!"});
    bot.on('message', function (msg) {
    var chatId = msg.chat.id;
   notes = console.log(msg);
       
    
        
        
   }
    if(msg.text == 'token')
    
     bot.sendMessage(chatId, notes, {caption: "I'm a bot!"});
   
});
