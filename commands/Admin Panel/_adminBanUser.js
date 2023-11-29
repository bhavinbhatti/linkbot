/*CMD
  command: /adminBanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🛠Enter User id?_

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("*🛑 User " +message+ " Has Been Banned Successfully*");
}else{Bot.sendMessage("❌Access Denied")};
