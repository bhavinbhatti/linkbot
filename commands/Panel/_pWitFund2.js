/*CMD
  command: /pWitFund2
  help: 
  need_reply: true
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
    "⚠️ Incorrect Format use \n`Amont-Address``")
//,{is_reply:true}
}
var msg=message
try {
  if (!msg) {
  }
  let receive = msg.split("-")
  var am = receive[0]
  var add = receive[1]
} catch (err) {
  find()
  return
}
var hat = Bot.getProperty("BotPanel")
var key = hat.prkey
HTTP.get({
  url: "https://txt.cwtip.co/tron/send/?pkey="+key+"&amo="+am+"&to="+add+"",
 success:"/onPBalTRXWitSuc Yes"
 })
