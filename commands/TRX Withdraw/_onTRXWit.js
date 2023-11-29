/*CMD
  command: /onTRXWit
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
var state = Bot.getProperty("WIT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 TRX Withdraw is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if(stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var witWallet=User.getProperty("witWallet")
if(!witWallet){
  Bot.sendMessage("_❌ Set Your Wallet First_",{is_reply:true})
  return }
  var isdep=User.getProperty("IsDep")
  if(!isdep){
    Bot.sendMessage("❌ You Must Invest TRX Atleast 1 Time",{is_reply:true})
    return }
    function find() {
  Bot.sendMessage(
    "❌ We Are Not Idiot")
}
try {
  if (!params) {
  }
  let receive = params.split(" ")
  var am = receive[0]
receive[2]
} catch (err) {
  find()
  return
}

var addr = User.getProperty("witWallet")
var hat = Bot.getProperty("BotPanel")
var key = hat.prkey
HTTP.get({
  url: "https://txt.cwtip.co/tron/send/?pkey="+key+"&amo="+am+"&to="+addr+"",
 success:"/onTRXWithSuccess "+request.message.message_id+" "+request.message.chat.id+""
 })
