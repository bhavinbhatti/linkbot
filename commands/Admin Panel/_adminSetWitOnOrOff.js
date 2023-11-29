/*CMD
  command: /adminSetWitOnOrOff
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


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var adminid = Bot.getProperty("Madmin")
var bon = Bot.getProperty("WIT")
if (user.telegramid == adminid){
  if(bon=="🛑 Turned OFF"){
    Bot.setProperty("WIT" ,"✅ Turned On","string")
    Bot.sendMessage("✅ Done : Bot Turned On")
    Bot.runCommand("/adminWithSet")
  }else{
  Bot.setProperty("WIT" ,"🛑 Turned OFF","string")
  Bot.sendMessage("✅ Done : Bot Turned Off")
  Bot.runCommand("/adminWithSet")
}
  }else{
  Bot.sendMessage("❌Access Denied")
  }
