/*CMD
  command: /adminSetBonOnOrOff
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
var bon = Bot.getProperty("BON")
if (user.telegramid == adminid){
  if(bon=="🛑 Turned OFF"){
    Bot.setProperty("BON" ,"✅ Turned On","string")
    Bot.sendMessage("✅ Done : Bonus Turned On")
    Bot.runCommand("/adminMainSet")
  }else{
  Bot.setProperty("BON" ,"🛑 Turned OFF","string")
  Bot.sendMessage("✅ Done : Bonus Turned Off")
  Bot.runCommand("/adminMainSet")
}
  }else{
  Bot.sendMessage("❌Access Denied")
  }
