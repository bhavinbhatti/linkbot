/*CMD
  command: /reInv
  help: 
  need_reply: true
  auto_retry_time: 
  folder: TRX ReInvent

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
var balance = Libs.ResourcesLib.userRes("balance").value().toFixed(8)
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}
if(message<1){
Bot.sendMessage("❌ Minimum ReInvest 1 TRX",{is_reply:true})
  return }
  if(message>balance){
   Bot.sendMessage("❌ You Have Only TRX "+balance+"",{is_reply:true})
   return }
   var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
  var time = Libs.DateTimeFormat.format(new Date(),"dd/mm/yyyy h:MM:ss T")+"M"
  let pcha=Bot.getProperty("PChannel")
   var userReInv = Libs.ResourcesLib.anotherChatRes("totalReInv","global")
   userReInv.add(message*1)
   var hr="24"
   var msg = message*1
   let a = msg+12/100*msg
   Bot.sendMessage("✅ *ReInvestment Started Now 🗞\n\n💳 Profit Will Credited Into Your Balance On Every 1 Hour Upto 24 Hours\n🎉 You Will Get A Total Of "+a+" TRX*",{is_reply:true})
Api.sendMessage({
chat_id:"@"+pcha+"",
text:"💞*New ReInvestment*\n🙋 *User* : "+info+"\n☄️ *ReInvestment : "+message+" TRX*\n🗓️ *Date & Time  : "+time+"\n🤖 Bot : @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
})
Bot.run({
command : "/onProf",
run_after : 60*60,
options: { amount: message, hrs: hr }
});
