/*CMD
  command: 📊 Statistics
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
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment","global").value().toFixed(6)
var userDeps = Libs.ResourcesLib.anotherChatRes("totalDeps","global").value().toFixed(6)
var userReInv = Libs.ResourcesLib.anotherChatRes("totalReInv","global").value().toFixed(6)
var status = Libs.ResourcesLib.anotherChatRes("status","global").value().toFixed(0)
Bot.sendMessage("📊 Full Statics Of Bot :\n\n🔰 Total Users : "+status+"\n➕ Total Deposits : "+userDeps+" TRX\n✔️ Total Withdraws : "+userPayment+" TRX\n〰️ Total ReInvests : "+userReInv+"",{is_reply:true})
