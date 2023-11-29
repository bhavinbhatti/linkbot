/*CMD
  command: /cPoBnow
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
HTTP.get({
  url: "https://txt.cwtip.co/tron/build/index.php",
  success: "/onPanelDo Yes"
})
}else{
Bot.sendMessage("❌Access Denied")
}
