/*CMD
  command: /adminUnBanUser
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
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*✅ User " +message+ " Has Been Unbanned Successfully*");
}else{Bot.sendMessage("❌Access Denied")};
