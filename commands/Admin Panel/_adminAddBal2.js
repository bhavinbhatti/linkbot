/*CMD
  command: /adminAddBal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _✍️Enter How Much You Want To Add_

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
let cur = Bot.getProperty("cur")
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " ❄️ TRX has been added to the User ID: * "   +tgid+ " * Balance*");
Bot.sendMessageToChatWithId(tgid,"*🎁 You have just received " + amount + " ❄️ TRX from admin.*");
}else{Bot.sendMessage("❌Access Denied")};
