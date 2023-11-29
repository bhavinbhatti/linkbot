/*CMD
  command: ➕ TRX-Invest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TRX Invest

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
var state = Bot.getProperty("INV")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 TRX Investment is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var wallet = User.getProperty("wallet")
if(!wallet){
  Bot.runCommand("/walletCreation Yes")
  return }
  var bu=[[{title:"✅ Deposited",command:"/incomeTRX"}]]
  Bot.sendInlineKeyboard(bu,"🔰 Deposit Minimum 2 TRX\n🎧 Address : `"+wallet+"`\nIf You Send Less Than 2 TRX Then Your Deposit Will Be Cancelled",{is_reply:true})
