const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let Day = await lib.utils.kv.get({
  key: `somekey`
});

let randomNumber0 = Math. floor(Math. random() * 3 * 1);
let randomNumber1 = Math. floor(Math. random() * 200) + 100 * 1;
let randomNumber2 = Math. floor(Math. random() * 3) * 1;
let randomNumber3 = Math. floor(Math. random() * 3) * 1;
let randomNumber4 = Math. floor(Math. random() * 3) * 1;
let randomNumber5 = Math. floor(Math. random() * 22)+ 1;
let randomNumber6 = Math. floor(Math. random() * 22)+ 1;
const sal = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee"]
let sall = sal.slice(randomNumber5 - 1, randomNumber5)

const sal2 = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee"]
let sall2 = sal.slice(randomNumber6 - 1, randomNumber6)

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `1147689788745465906`,
  "content": `***<@&1150246701928562740>!***`,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `No fuckoff`,
          "url": `https://youtu.be/vI86GvBBZvM?t=6`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Daily task`,
      "description": `There is a task for you today:\nYou need to bring to us these signal:\n${randomNumber0} Signals of level 0\n${randomNumber2} Signals of level 1\n${randomNumber3} Signals of level 2\n${randomNumber4} Signals of level 3\nReward: ${randomNumber1}\n\nAnd check this satellite and make a hash-code report:\n${sall}\n${sall2}\nReward: 25\n\n`,
      "color": 0x1b8116,
      "author": {
        "name": `Dr. bao`,
        "icon_url": `https://images-ext-2.discordapp.net/external/PbGdr0yx9DOdHho5_FVKdKFSbf8rISYLLrU7wgidjww/https/cdn-longterm.mee6.xyz/plugins/embeds/images/1147686132600029194/eaba65d2ddaa774ca5a76a7550100d12c795d6d81f103310b743480e5551aece.png`
      },
      "footer": {
        "text": `Day: ` + Day,
        "icon_url": `https://cdn.discordapp.com/attachments/813970680377770015/1150252844193161216/818.png`
      }
    }
  ]
});


await lib.utils.kv['@0.1.16'].set({
  key: `somekey`,
  value: `${Day * 1 + 1}`
});

