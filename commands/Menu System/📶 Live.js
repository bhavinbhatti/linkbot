/*CMD
  command: 📶 Live
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Menu System

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }

var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*");
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*");
return }
let pcha=Bot.getProperty("PChannel");
var p="@"+pcha+"";
Bot.sendMessage("*🔰 Live Investments , ReInvestments , Withdrawal , Etc\n\n➡️ "+p+"*",{is_reply:true})
