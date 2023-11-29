/*CMD
  command: 💱 TRX-ReInvest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TRX ReInvent

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
var balance = Libs.ResourcesLib.userRes("balance").value().toFixed(8)
if(balance<1){
  Bot.sendMessage("❌ You Must Have 1 TRX To ReInvest",{is_reply:true})
  return }
Bot.sendMessage("🔰 Enter Amount To ReInvest\n\n💫 Plan Details\nEvery Hour 0.5% Of ReInvest\nAfter 24 Hours Your ReInvest Will Stop\nYou Will Get A Total Of 12% Of ReInvest",{is_reply:true})
Bot.runCommand("/reInv")
