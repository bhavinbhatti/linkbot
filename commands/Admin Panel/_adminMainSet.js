/*CMD
  command: /adminMainSet
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
var k = Bot.getProperty("BON")
var ckeys = [[{title:"⚙️ Set Refer Amount",command:"/adminSetRefAmo"},{title:"✅ On/❌ Off Bonus",command:"/adminSetBonOnOrOff"}],[{title:"🔙 Back",command:"/admin"}]]
Bot.sendInlineKeyboard(ckeys,"❄️ *Select An Option From Below\n\n🎁 Bonus Is Currently : "+k+"*")
}else{
Bot.sendMessage("❌Access Denied")
}
