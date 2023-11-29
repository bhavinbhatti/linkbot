/*CMD
  command: /reply2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support

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
var id = Bot.getProperty("Madmin")
if(user.telegramid!=id){ return }
function find(){
Bot.sendMessage("hi")
}
try {
  if (!params) {
  }
  let receive = params.split(" ")
  var iou = receive[0]
} catch (err) {
  find()
  return
}
Bot.sendMessage("_🔰 Enter Message To Reply_")
Bot.setProperty("reply2",iou,"String")
Bot.runCommand("/reply22")
