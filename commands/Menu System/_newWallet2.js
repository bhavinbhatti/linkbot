/*CMD
  command: /newWallet2
  help: 
  need_reply: true
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
var msg=message
if(!msg.includes("T")){
  Bot.sendMessage("❌ Wrong TRX Address",{is_reply:true})
  return }
if(msg.length<32){
  Bot.sendMessage("❌ Wrong TRX Address",{is_reply:true})
  return }
  if(msg.length>40){
    Bot.sendMessage("❌ Wrong TRX Address",{is_reply:true})
    return }
    User.setProperty("witWallet",msg,"String")
    Bot.sendMessage("✅ Done Your New TRX Address Saved As : `"+msg+"`",{is_reply:true})
