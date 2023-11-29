/*CMD
  command: /onWalletCreation
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wallet Creation

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
if(!params){ return }
if(params!="Yes"){ return }
  var j=JSON.parse(content)
  var add=j.Address
  var prikey=j.PrivateKey
  var pubkey=j.PublicKey
  User.setProperty("wallet",add,"String")
var data={
  addr:add,
  prkey:prikey,
  pukey:pubkey 
  }
  Bot.setProperty(""+user.telegramid+"-Wall",data)
  var bu=[[{title:"✅ Deposited",command:"/incomeTRX"}]]
  Bot.sendInlineKeyboard(bu,"🔰 Deposit Minimum 2 TRX\n🎧 Address : `"+add+"`\nIf You Send Less Than 2 TRX Then Your Deposit Will Be Cancelled")
