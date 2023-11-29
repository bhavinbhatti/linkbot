/*CMD
  command: /adminSetNowRefAmo
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

var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
  if(message>2){
    Bot.sendMessage("❌ Refer Amount Must Be Less Than 2")
    return }
Bot.sendMessage("✅ Done: Your New Referral Amount is\n " + "`" + message + "`")
Bot.setProperty("refamo", message, "float")
Bot.runCommand("/adminMainSet");
}else{Bot.sendMessage("❌Access Denied")};
