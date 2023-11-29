/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: /start

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
var admin=Bot.getProperty("Madmin")
if(!admin){
var id=user.telegramid
Bot.setProperty("Madmin",id,"String")
Bot.sendMessage("😅 Press /admin",{is_reply:true})
return }
var c="@"
let mcha=Bot.getProperty("MChannel")
let pcha=Bot.getProperty("PChannel")
if(mcha==undefined&&pcha==undefined){
Bot.sendMessage("🧐 Set Channels First",{is_reply:true})
return }
var keys=[[{title:"✅ Joined",command:"/joinCha"}]]
var vvs="*🥳 To Continue With Us, You Must Join\n\n🔰 Main Channel ::- "+c+""+mcha+"\n\n🎧 Payment Channel ::- "+c+""+pcha+"*"
Bot.sendInlineKeyboard(keys,vvs)
let welc=User.getProperty("welc")
if(!welc){
function onAttracted(refUser){
var res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(0);
//Bot.sendMessageToChatWithId(refUser.chatId,"*+0.001 TRX for New refferal*")
}
Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(1)
User.setProperty("welc","yes","String")
var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendMessageToChatWithId(admin,
    "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = "+user.first_name+"\n\n👮🏻‍♂Username =* " +
      user_link +
      " \n\n*💳User Id =* `" +
      user.telegramid +
      "`"
  )
var broadcastt = Bot.getProperty("Broadcasto")
var broadcasth = broadcastt ? broadcastt : []
if(!broadcasth.includes(user.telegramid)){ 
broadcasth.push(user.telegramid)
Bot.setProperty("Broadcasto",broadcasth,"json")
}
return }
