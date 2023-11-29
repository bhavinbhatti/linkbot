/*CMD
  command: /adminSetNowMainCha
  help: 
  need_reply: true
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

var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
Bot.setProperty("MChannel",message,"String");
Bot.sendMessage("*✅Done Main Channel Set To @"+message+"*");
Bot.runCommand("/adminChalSet");
}else{
Bot.sendMessage("❌Access Denied")
}
