/*CMD
  command: /adminSetPayCha
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
Bot.sendMessage("_Send Payment Channel Name Without @_")
Bot.runCommand("/adminSetNowPayCha")
}else{
Bot.sendMessage("❌Access Denied")
}
