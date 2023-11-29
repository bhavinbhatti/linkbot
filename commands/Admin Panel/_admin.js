/*CMD
  command: /admin
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
var keys = [[{title:"📜 Panel",command:"/panelOfBotOfAdmin"}],[{title:"🚠 Main Setting",command:"/adminMainSet"},{title:"🤖 Bot Setting",command:"/adminBotSet"}],[{title:"📤 Withdrawal Setting",command:"/adminWithSet"},{title:"📱 Channel Setting",command:"/adminChalSet"}],[{title:"💌 Broadcast",command:"/adminBroad"},{title:"⏩ More",command:"/adminMore"}]]
Bot.sendInlineKeyboard(keys,"*💠 Select The Options Below*")
}else{
Bot.sendMessage("❌Access Denied")
}
