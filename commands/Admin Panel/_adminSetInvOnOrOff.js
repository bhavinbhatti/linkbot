/*CMD
  command: /adminSetInvOnOrOff
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
var bon = Bot.getProperty("INV")
if (user.telegramid == adminid){
  if(bon=="🛑 Turned OFF"){
    Bot.setProperty("INV" ,"✅ Turned On","string")
    Bot.sendMessage("✅ Done : Investment Turned On")
    Bot.runCommand("/adminBotSet")
  }else{
  Bot.setProperty("INV" ,"🛑 Turned OFF","string")
  Bot.sendMessage("✅ Done : Investment Turned Off")
  Bot.runCommand("/adminBotSet")
}
  }else{
  Bot.sendMessage("❌Access Denied")
  }
