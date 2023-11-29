/*CMD
  command: /adminChalSet
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
let channel1 = Bot.getProperty("MChannel")
let pchannel = Bot.getProperty("PChannel")
var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
var ckeys = [[{title:"⚙️ Set Or Change Main Channel",command:"/adminSetMainCha"}],[{title:"⚙️ Set Or Change Payment Channel",command:"/adminSetPayCha"}],[{title:"🔙 Back",command:"/admin"}]]
Bot.sendInlineKeyboard(ckeys,"*💠 Select The Options Below\n\n💎 Main Channel ::- @"+channel1+"\n🔰 Payout Channel ::- @"+pchannel+"\n\nIf Any Channel Is Undefined Then Setup*")
}else{
Bot.sendMessage("❌Access Denied")
}
