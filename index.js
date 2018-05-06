const TOKEN = '535002576:AAHd9_AQB2uYhSivA28TTp0CAZG5CFzs96k'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot (TOKEN, {polling:true})
bot.on('message', msg=>{
    bot.sendMessage(msg.chat.id, `hello, bot say: "HI, ${msg.from.first_name}"`)
})