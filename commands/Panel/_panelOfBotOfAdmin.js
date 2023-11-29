/*CMD
  command: /panelOfBotOfAdmin
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var adminid = Bot.getProperty("Madmin")
let panel = Bot.getProperty("BotPanel")
if (user.telegramid == adminid){
if(!panel){
  var bu=[[{title:"📢 Make Now",command:"/cPoBnow"}],[{title:"🔙 Back",command:"/admin"}]]
  Bot.sendInlineKeyboard(bu,"❌ Bot Doesn't Have Any Panel Click On ~📢 Make Now~ To Create Bot Panel")
  return }
  var baddr = Bot.getProperty("BotAddr")
  var pbal = Libs.ResourcesLib.userRes("pbal")
  var but=[[{title:"⛽ Panel Balance",command:"/bPanelBal"},{title:"⚓ Withdraw Panel Fund",command:"/pWitFund"}],[{title:"🔙 Back",command:"/admin"}]]
  Bot.sendInlineKeyboard(but,"💘 Panel's Full Details\n\n🚡 Wallet : `"+baddr+"`\n⛽ Panel Balance : "+pbal.value().toFixed(8)+" TRX\nClick On ~⛽ Panel Balance~ To Refresh The Balance Of Panel")
}else{
Bot.sendMessage("❌Access Denied")
}
