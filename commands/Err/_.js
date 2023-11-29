/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Err

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }
var adminid = Bot.getProperty("Madmin")
if(user.telegramid != adminid){ return }
