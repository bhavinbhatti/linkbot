/*CMD
  command: /adminBotSet
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
var k = Bot.getProperty("BOT")
var kk = Bot.getProperty("INV")
var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
var ckeys = [[{title:"🟢 On/🔴 Off Bot",command:"/adminSetBotOnOrOff"},{title:"🟢 On/🔴 Off Bot Investment",command:"/adminSetInvOnOrOff"}],[{title:"🔙 Back",command:"/admin"}]]
Bot.sendInlineKeyboard(ckeys,"🔌 *Bot is Currenctly* : " +k+"\n*🧷 Investment Is Currently* : "+kk+"")
}else{
Bot.sendMessage("❌Access Denied")
}
