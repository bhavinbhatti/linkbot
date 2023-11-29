/*CMD
  command: /adminCheckUBal
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
let cur = Bot.getProperty("cur")
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*💰User Balance = "+user_bal.value().toFixed(8)+" ❄️"+cur+"*")
}else{
Bot.sendMessage("❌Access Denied")
}
