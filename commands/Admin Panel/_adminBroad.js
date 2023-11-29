/*CMD
  command: /adminBroad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🔰 Enter Message To Broadcast_

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adminid = Bot.getProperty("Madmin")
if (user.telegramid == adminid){
var i;
var ialluser =
Bot.getProperty("Broadcasto")
var iallusers = ialluser ? ialluser : []
var cl = Bot.getProperty("brdDone")
var ccs = cl ? cl : []
Bot.sendMessage("Staring Broadcast.....")
for(i=1;i<=iallusers.length;i++){
function getRandomItem(arr) {

    // get random index value
    var randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    var item = arr[randomIndex];

    return item;
}
var arr = iallusers
var result = getRandomItem(arr);
if(!ccs.includes(result)){
  Bot.sendMessageToChatWithId(result,"*🧨 Important Announcement By Admin*\n\n----------------------------------------------------------------------------------------------------------------\n\n"+message)
  ccs.push(result)
Bot.setProperty("brdDone",ccs,"json")
}else{
i=i-1
continue }
}
Bot.sendMessage("Broadcast Successful")
Bot.setProperty("brdDone",null)
}else{
Bot.sendMessage("❌Access Denied")
}
