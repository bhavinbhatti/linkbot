/*CMD
  command: 💳 Balance
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
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let minw = Bot.getProperty("Mindepo")
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User :*  [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")\n*💰 Balance : "+balance.value().toFixed(8)+" TRX*",{is_reply:true})
