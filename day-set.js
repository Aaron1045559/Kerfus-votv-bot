const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let day = `${context.params.event.data.options[0].value}`


const event = context.params.event;
// Add your role IDs here
const roleIds = new Set([
  '1150246701928562740',
]);

const userHasRole = event.member.roles.some(r => roleIds.has(r));

if (userHasRole) {
  
  await lib.discord.channels['@0.3.2'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": `Day set to ${context.params.event.data.options[0].value}`,
    "tts": false
  });
  
  await lib.utils.kv['@0.1.16'].set({
    key: `somekey`,
    value: `${day}`
  });
}


else {
  await lib.discord.channels['@0.3.2'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": `no lol`,
    "tts": false
  });
}