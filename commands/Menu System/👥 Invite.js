/*CMD
  command: 👥 Invite
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
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let raamo = Bot.getProperty("refamo")
let res = Libs.ResourcesLib.userRes("referral");
let reflink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","By");
let reflist = Libs.ReferralLib.getRefCount()
Bot.sendMessage("*🤴 User :*  [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")\n\n*❤️ Total Refers : "+reflist+"\n🔗 Refer Link : "+reflink+"\n👥 Per Refer : "+raamo+" TRX + 10% Income On Deposit By Refers*",{is_reply:true})
