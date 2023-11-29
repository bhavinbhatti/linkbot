/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TRX Withdraw

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
var state2 = Bot.getProperty("WIT")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 TRX Withdraw is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if(stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var balance = Libs.ResourcesLib.userRes("balance").value().toFixed(8)
if(balance<2){
  Bot.sendMessage("❌ You Must Have 2 TRX To Withdraw",{is_reply:true})
  return }
var witWallet=User.getProperty("witWallet")
if(!witWallet){
  Bot.sendMessage("_❌ Set Your Wallet First_",{is_reply:true})
  return }
  var isdep=User.getProperty("IsDep")
  if(!isdep){
    Bot.sendMessage("❌ You Must Invest TRX Atleast 1 Time",{is_reply:true})
    return }
Bot.sendMessage("_💛 Enter Amount Of TRX To Withdraw_",{is_reply:true})
Bot.runCommand("/wit2")
