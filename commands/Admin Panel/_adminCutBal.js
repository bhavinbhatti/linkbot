/*CMD
  command: /adminCutBal
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
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand("/adminCutBal2");
}else{Bot.sendMessage("❌Access Denied")};
