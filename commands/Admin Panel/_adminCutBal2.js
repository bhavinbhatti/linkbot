/*CMD
  command: /adminCutBal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _✍️Enter How Much You Want To Cut_

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
res.add(parseFloat(-amount))
Bot.sendMessage("*The amount " +amount+ " ❄️ TRX has been Cutted from the User ID: * "   +tgid+ " * Balance*");
}else{Bot.sendMessage("❌Access Denied")};
