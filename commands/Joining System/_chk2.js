/*CMD
  command: /chk2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Joining System

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }/*
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*")
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*")
return }*/
let pchannel = Bot.getProperty("PChannel")
let channel = "@"+pchannel+"";
var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/menu")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join "+channel+"*")
}
