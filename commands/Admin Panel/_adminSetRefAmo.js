/*CMD
  command: /adminSetRefAmo
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
if (user.telegramid == adminid){
Bot.sendMessage("_Send Your Referral Amount You Want To Set_")
Bot.runCommand("/adminSetNowRefAmo")
}else{Bot.sendMessage("❌Access Denied")};
