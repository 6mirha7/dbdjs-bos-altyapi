const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "Token", 
prefix: "Prefix" 
})

bot.onMessage()

bot.command({
name: "ping", 
code:`Şuanlık Pingim= **$ping**` 
})


bot.status({
  text: "Oynuyor",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Rahatsız Etme Durum",
  type: "PLAYING",
  status: "dnd",
  time: 12
})


bot.variables({
  variables: "value",
  variables2: "value",
  variables3: "value"
  })
