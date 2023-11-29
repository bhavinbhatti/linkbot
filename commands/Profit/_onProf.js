/*CMD
  command: /onProf
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Profit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

//if(chat.chat_type!="private"){ return }
if(!options){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*")
return }
let stat = Bot.getProperty(""+user.telegramid+"")

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*")
return }
var deposit = options.amount
var hr = options.hrs
if(hr<=0){ return }
var deposi=deposit*1
let prof = 0.5/100*deposi
Bot.sendMessage("*➕ Investment Accrual : *"+prof+ " TRX")

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(prof)
var hrp = hr-1;
Bot.run({
command : "/onProf",
run_after : 60*60,
options: { amount: deposi , hrs: hrp }
});
