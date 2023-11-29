/*CMD
  command: /reply22
  help: 
  need_reply: true
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
var iou=Bot.getProperty("reply2")
Bot.sendMessageToChatWithId(iou,"❣️ Message From Admin\n\n~"+message+"~")
Bot.setProperty("reply2",null)
Bot.sendMessage("✅ Message Sended")
