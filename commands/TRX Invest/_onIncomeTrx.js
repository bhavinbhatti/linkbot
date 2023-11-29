/*CMD
  command: /onIncomeTrx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: TRX Invest

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
var state = Bot.getProperty("INV")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 TRX Investment is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var wallet = User.getProperty("wallet")
if(!wallet){
  Bot.runCommand("/walletCreation Yes")
  return }
  var j=JSON.parse(content)
  var addr=j.Address
 if(!j){ return }
  var bal=j.Balance
 var bali = parseFloat(bal)
  if(bali<2){
    Bot.sendMessage("❌ Minimum Investment 2 TRX")
    return; }
    if(addr!=wallet){
    Bot.sendMessage("❌ You Send TRX To Wrong Address")
    return }
    var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
    var prof = bal*1
    let balance = Libs.ResourcesLib.userRes("balance")
balance.add(prof)
User.setProperty("IsDep","yes","String")
var userDeps = Libs.ResourcesLib.anotherChatRes("totalDeps","global")
userDeps.add(prof)
 let a = prof+12/100*prof
 var time = Libs.DateTimeFormat.format(new Date(),"dd/mm/yyyy h:MM:ss T")+"M"
 let pcha=Bot.getProperty("PChannel")
Bot.sendMessage("✅ *ReInvestment Started Now 🗞\n\n💳 Profit Will Credited Into Your Balance On Every 1 Hour Upto 24 Hours\n🎉 You Will Get A Total Of "+a+" TRX*")
Api.sendMessage({
chat_id:"@"+pcha+"",
text:"💞*New Investment*\n🙋 *User* : "+info+"\n☄️ *Investment : "+message+" TRX*\n*💡 At :* ["+addr+"](https://tronscan.org/#/address/"+addr+")\n🗓️ *Date & Time  : "+time+"\n🤖 Bot : @"+bot.name+"*",parse_mode : "Markdown" , disable_web_page_preview: true
})
var hr="24"
Bot.run({
command : "/onProf",
run_after : 60*60,
options: { amount: prof, hrs: hr }
});
