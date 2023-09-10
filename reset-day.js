const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const event = context.params.event;

// Add your role IDs here
const roleIds = new Set([
  '1150246701928562740',
]);

const userHasRole = event.member.roles.some(r => roleIds.has(r));

if (userHasRole) {
let Day = await lib.utils.kv.get({
  key: `somekey`
});

console.log(Day); // prints 'stored value'

await lib.utils.kv['@0.1.16'].set({
  key: `somekey`,
  value: `0`
});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Day reset to 0`,
  "tts": false,
})
}
else {
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id} `,
  "content": `Chat, Bully this man`,
  "tts": false
});
}