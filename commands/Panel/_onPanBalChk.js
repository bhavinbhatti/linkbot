/*CMD
  command: /onPanBalChk
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
if (user.telegramid != adminid) {
  return
}
if (!params) {
  return
}
if (params != "Yes") {
  return
}
var j = JSON.parse(content)
var balc = j.Balance
let pbal = Libs.ResourcesLib.userRes("pbal")
pbal.add(parseFloat(balc))
Bot.sendMessage("✅ Panel Balance Checked")

