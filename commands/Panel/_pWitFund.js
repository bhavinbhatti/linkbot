/*CMD
  command: /pWitFund
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

if (chat.chat_type != "private") {
  return
}
var adminid = Bot.getProperty("Madmin")
if (user.telegramid != adminid) { return }
Bot.sendMessage("_🔰 Enter Amount Of TRX To Withdraw From Panel + Address Where You Want To Send\nLike 1-TX9kskhxxx....\n\n📢 Note 1 TRX Is Withdraw Fee_")
Bot.runCommand("/pWitFund2")
