/*CMD
  command: /menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Menu System

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*");
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*");
return }

let raamo = Bot.getProperty("refamo")
var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(raamo)
  Bot.sendMessageToChatWithId(refUser.chatId, "+"+raamo+" TRX Added\n*Referral :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
var bu="💳 Balance\n➕ TRX-Invest,💱 TRX-ReInvest\n🎁 Bonus,👥 Invite,💼 Wallet\n⁉️ Help,➖ Withdraw,📊 Statistics\n📞 Support,📶 Live"
Bot.sendKeyboard(bu,"_🥳 Welcome To The World's Best Investment Bot_")
}
if (user=="left"){
Bot.runCommand("/start");
}
