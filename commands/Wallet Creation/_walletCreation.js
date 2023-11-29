/*CMD
  command: /walletCreation
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wallet Creation

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
if(!params){ return }
if(params=="Yes"){
HTTP.get({
  url: "https://txt.cwtip.co/tron/build/index.php",
  success: "/onWalletCreation Yes"
})
return }
