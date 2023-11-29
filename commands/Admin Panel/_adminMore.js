/*CMD
  command: /adminMore
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
var keys = [[{title:"🔍 Check User's Balance",command:"/adminCheckUBal"}],[{title:"➕ Add Balance",command:"/adminAddBal"},{title:"➖ Cut Balance",command:"/adminCutBal"}],[{title:"🔒 Ban User",command:"/adminBanUser"},{title:"🔓 UnBan User",command:"/adminUnBanUser"}],[{title:"🔙 Back",command:"/admin"}]]
Bot.sendInlineKeyboard(keys,"*💠 Select The Options Below*")
}else{Bot.sendMessage("❌Access Denied")};
