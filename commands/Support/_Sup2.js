/*CMD
  command: /Sup2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support

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
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var msg=message
if(msg.length<15){
  Bot.sendMessage("❌ Message Too Short",{is_reply:true})
  return }
  if(msg.length>1000){
    Bot.sendMessage("❌ Message Too Long",{is_reply:true})
    return }
    var adminid = Bot.getProperty("Madmin")
    var userr = Libs.commonLib.getLinkFor(user)
    var id = adminid
    var idd = user.telegramid
    var bu=[[{title:"🔄 Reply",command:"/reply2 "+idd+""}]]
Bot.sendInlineKeyboardToChatWithId(id,bu,"*💫 Message From\n🙋 User :* "+userr+"\n*☄️ User Id :* `"+id+"`\n*🧷 Message :* "+message+"")
