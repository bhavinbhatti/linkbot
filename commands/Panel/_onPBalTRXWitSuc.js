/*CMD
  command: /onPBalTRXWitSuc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (chat.chat_type != "private") {
  return
}
var adminid = Bot.getProperty("Madmin")
if (user.telegramid != adminid) { return }
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
var j=JSON.parse(content)
//Bot.sendMessage(content)
var stat2 = j.Status
if(stat2=="Success"){
var am = j.SendedTRX
var addr = j.Address
var txid = j.TxID
var amo=am-1
Bot.sendMessage("😎 Your Withdrawal Completed\n🔥 Status : "+stat2+"\n💲 Amount : "+amo+"\n💫 Address : "+addr+"\n☄️ Transcation I'd ["+txid+"](https://tronscan.org/#/transaction/"+txid+"")
}else{
Bot.sendMessage("❌ Withdraw Failed Due To Less Amount Of TRX In Panel")
}
