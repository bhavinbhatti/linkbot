/*CMD
  command: /onPanelDo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type!="private"){ return }

var adminid = Bot.getProperty("Madmin")
if(user.telegramid == adminid){
if(!params){ return }
if(params!="Yes"){ return }
var j=JSON.parse(content)
  var add=j.Address
  var prikey=j.PrivateKey
  var pubkey=j.PublicKey
  Bot.setProperty("BotAddr",add,"String")
  var data={
  addr:add,
  prkey:prikey,
  pukey:pubkey 
  }
  Bot.setProperty("BotPanel",data)
  Bot.runCommand("/panelOfBotOfAdmin")
}else{
Bot.sendMessage("❌Access Denied")
}
