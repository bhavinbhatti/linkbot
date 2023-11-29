/*CMD
  command: /adminWithSet
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
var k = Bot.getProperty("WIT")
var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
var ckeys = [[{title:"🟢 On/🔴 Off Withdraw",command:"/adminSetWitOnOrOff"}],[{title:"🔙 Back",command:"/admin"}]]
Bot.sendInlineKeyboard(ckeys,"🔌 *Withdraw Is Currenctly* : " +k)
}else{
Bot.sendMessage("❌Access Denied")
}
