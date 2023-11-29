/*CMD
  command: /onTRXWithSuccess
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
function find() {
  Bot.sendMessage(
    "❌ Duffer U Can't Use Bug Or Glitch")
}
try {
  if (!params) {
  }
  let receive = params.split(" ")
  var message_id = receive[0]
  var chat_id = receive[1]
} catch (err) {
  find()
  return
}
Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
var j=JSON.parse(content)
//Bot.sendMessage(content)
var stat2 = j.Status
var time = Libs.DateTimeFormat.format(new Date(),"dd/mm/yyyy h:MM:ss T")+"M"
if(stat2=="Success"){
  var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var am = j.SendedTRX
var addr = j.Address
var txid = j.TxID
var amo=am-1
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment","global")
userPayment.add(amo*1)
Bot.sendMessage("😎 Your Withdrawal Completed\n🔥 Status : "+stat2+"\n💲 Amount : "+amo+"\n💫 Address : "+addr+"\n☄️ Transcation I'd ["+txid+"](https://tronscan.org/#/transaction/"+txid+"")
let pcha=Bot.getProperty("PChannel")
Api.sendMessage({
chat_id:"@"+pcha+"",
text:"💞*New Withdrawal*\n🙋 *User* : "+info+"\n☄️ *Withdraw : "+amo+" TRX*\n*💫 Transcation I'd :* ["+txid+"](https://tronscan.org/#/transaction/"+txid+")\n🗓️ *Date & Time  : "+time+"\n🤖 Bot : @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
})
}else{
var info2 =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var am2 = j.FailedTRX
var amo2 = am2-1
var addr2 = j.Address
var idd=user.telegramid
var id = Bot.getProperty("Madmin")
Bot.sendMessage("😎 Your Withdrawal Failed\n🔥 Status : "+stat2+"\n💲 Amount : "+amo2+"\n💫 Address : "+addr2+"\n☄️ You Will Get It Within 24-48 Hours")
Bot.sendMessageToChatWithId(id,"*❌ Withdrawal Failed Of\n🔥 User :* "+info2+"\n*🧷 User Id :* `"+idd+"`\n*💲 Amount :* "+amo2+"\n*💫 Address :* `"+addr2+"`")
let pcha2=Bot.getProperty("PChannel")
Api.sendMessage({
chat_id:"@"+pcha2+"",
text:"💞*New Withdrawal*\n🙋 *User* : "+info2+"\n☄️ *Withdraw : "+amo2+" TRX*\n🗓️ *Date & Time  : "+time+"\n🤖 Bot : @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
})
}
