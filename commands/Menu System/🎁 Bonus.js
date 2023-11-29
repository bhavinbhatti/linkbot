/*CMD
  command: 🎁 Bonus
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
var state2 = Bot.getProperty("BON")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Bonus Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*❌ You Have Already Collected Bonus Today\n\n😅 Come Back After ⏳ "+wait_hours+" Hours "+wait_minutes+" Minutes " 
 + seconds+ " Seconds*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var bamo = Libs.Random.randomFloat(0.001,0.009)/10
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(bamo)
Bot.sendMessage("*🎉 Congratulations* [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ") *You Got "+bamo+" TRX*",{is_reply:true})
