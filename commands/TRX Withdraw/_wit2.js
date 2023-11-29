/*CMD
  command: /wit2
  help: 
  need_reply: true
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
var state = Bot.getProperty("WIT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 TRX Withdraw is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if(stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var balance = Libs.ResourcesLib.userRes("balance").value().toFixed(8)
var witWallet=User.getProperty("witWallet")
if(!witWallet){
  Bot.sendMessage("_❌ Set Your Wallet First_",{is_reply:true})
  return }
  var isdep=User.getProperty("IsDep")
  if(!isdep){
    Bot.sendMessage("❌ You Must Invest TRX Atleast 1 Time",{is_reply:true})
    return }
  function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}
if(message<2){
  Bot.sendMessage("❌ Minimum Withdraw 2 TRX",{is_reply:true})
  return }
  if(message<balance){
   Bot.sendMessage("❌ You Have Only TRX "+balance+"",{is_reply:true})
   return }
   var dat=Bot.getProperty(""+user.telegramid+"-Wall")
   var pkey=dat.prkey
// "+witWallet+" "+pkey+"
var bu=[[{title:"✅ Confirm",command:"/onTRXWit "+message+""},{title:"❌ Cancel",command:"/onWithCan"}]]
Bot.sendInlineKeyboard(bu,"🔰 Check Your Details Now\n🤑 Amount : "+message+"\n💼 Wallet : `"+witWallet+"`\n📢 Note 1 TRX Is Transaction Fee")
