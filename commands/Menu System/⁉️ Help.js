/*CMD
  command: ⁉️ Help
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
var msg="1.) If You Want To Deposit Then Click On TRX-Invest\n2.) If You Want To Withdraw Then First Set Wallet Then Click On Withdraw Enter Amount Confirm Done ✅✅\n3.) Want To Ask Questions With Admin Click On Support"
Bot.sendMessage(msg,{is_reply:true})
