/*CMD
  command: 💼 Wallet
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

var witWallet=User.getProperty("witWallet")
if(!witWallet){
  var bu=[[{title:"🚀 Set Wallet",command:"/newWallet"}]]
  Bot.sendInlineKeyboard(bu,"*🥰 Dear* [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ") *You Don't Have Any Wallet Click On ~🚀 Set Wallet~ To Set Your Wallet Now*",{is_reply:true})
}else{
var bu2=[[{title:"🚀 Set/⚙️ Change Wallet",command:"/newWallet"}]]
Bot.sendInlineKeyboard(bu2,"*🥰 Dear* [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ") *\n💼 Wallet :* `"+witWallet+"`\n*This Wallet Is For Withdrawal Of TRX*",{is_reply:true})
}
