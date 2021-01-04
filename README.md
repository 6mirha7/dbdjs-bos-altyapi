# Discord Bot Designer

# This Package, allows you to make Discord Bot with ease!
## Are you Familiar with BDFD aka Bot Designer for Discord?
### Then you can easily transfer your code into this Package with no issues!
### To install, the package `npm install`
## To start the Bot `node .`
## Remember change `TOKEN` in `server.js`

### Example ⛏

```js
const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "!" 
})

bot.onMessage()

bot.command({
name: "ping", 
code: `Pong!` 
})

```

### Using Variables ⚙️ 

`It has to be in, your main index`

```js
bot.variables({
  Name: "Value",
  Name2: "Value2"
})

```

### Using Callbacks 💡 
`It has to be in, your main index`

```js
bot.joinCommand({
  channel: "CHANNEL ID",
  code: `Welcome <@$authorID>`
})

bot.onJoined()

```

### Using Custom Bot Status 
`It has to be in, your main index`

```js
bot.status({
  text: "Your Text",
  type: "PLAYING",
  time: 12
})
```


[Documentation](https://dbd.leref.ga)

[Support Server](https://discord.gg/HMUfMXDQsV)
