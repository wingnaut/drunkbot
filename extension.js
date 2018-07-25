// Credit to ureadmyname, Benzi & N8teZero

(function () {

function extend() {
if (!window.bot) {
return setTimeout(extend, 1 * 1000);
}

var autoDiscord = true;
var autoFav = true;
var autoRoulette = false;
var autoRules = true;
var autoTwitch = false;
var bot = window.bot;
var minute= 1000 * 60;

bot.retrieveSettings();

var spamWords = ['spam1234', 'spam2341', 'spam3412', 'spam4123'];
for (var i = 0; i < spamWords.length; i++) {
window.bot.chatUtilities.spam.push(spamWords[i]);
}

setInterval(function () {
if(autoRoulette === true) {
API.sendChat("!roulette");
}
},
1000 * 60 * 58);

setInterval(function () {
if(autoFav === true) {
API.sendChat("!fav");
}
},
1000 * 60 * 67);
        
setInterval(function () {
if(autoRules === true) {
API.sendChat("!rules");
}
},
1000 * 60 * 78);

setInterval(function () {
if(autoDiscord === true) {
API.sendChat("!discord");
}
},
1000 * 60 * 87);

setInterval(function () {
if(autoTwitch === true) {
API.sendChat("!twitchlive");
}
},
1000 * 60 * 15);

bot.commands.abuseCommand = {
command: 'abuse',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Please do not abuse the !dc command. !dc is for when you have internet issues; Not for when you leave to go to another community and or leave to go do something else.");}}};

bot.commands.automateDiscord = {
command: ['autodiscord'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoDiscord = !autoDiscord;
API.sendChat("/me Discord Message now set to " + autoDiscord);}}};

bot.commands.automateFav = {
command: ['autofav'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoFav = !autoFav;
API.sendChat("/me Fav Message now set to " + autoFav);}}};

bot.commands.automateRoulette = {
command: ['autoroulette'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoRoulette = !autoRoulette;
API.sendChat("/me Roulette now set to " + autoRoulette);}}};
                    
bot.commands.automateRules = {
command: ['autorules'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoRules = !autoRules;
API.sendChat("/me Rules now set to " + autoRules);}}};

bot.commands.automateTwitch = {
command: ['autotwitch'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoTwitch = !autoTwitch;
API.sendChat("/me Twitch message now set to " + autoTwitch);}}};

bot.commands.dcinfoCommand = {
command: 'dcinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Type !dc if you have recently disconnected to get your position on the waitlist back!");}}};

bot.commands.discordCommand = {
command: 'discord',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me We have a discord room! You can come and chat with us here: https://discord.gg/DkcAHVZ");}}};

bot.commands.djcycleinfoCommand = {
command: 'djcycleinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Djcycle is a setting that automatically adds you back onto the waitlist after playing a song. If it's disabled you will have to manually add yourself back.");}}};

bot.commands.favCommand = {
command: 'fav',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Remember to click the star in the top bar to favorite this room!! http://i.imgur.com/9jSSm41.png");}}};

bot.commands.guidelinesCommand = {
command: 'guidelines',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Staff Guidelines: https://git.io/fNRkf");}}};

bot.commands.doarefreshCommand = {
command: 'ref',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Having a problem or issue with plug.dj? Try refreshing =)");}}};

//props2
bot.commands.props2 = {
command: 'nice', 'woot', 'dope', 'yes', 'rad',
                rank: 'rdj',
                type: 'startsWith',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                            var crowd = API.getUsers();
                            var msg = chat.message;
                            var argument = msg.substring(cmd.length + 1).replace(/@/g, '');
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * basicBot.chat.props.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            API.sendChat(subChat(basicBot.chat.prop, {name: chat.un, botname: basicBot.settings.botName, question: argument, response: basicBot.chat.props[randomProp]}));
                     }
                }
            };

bot.commands.rouletteinfoCommand = {
command: 'rouletteinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Drunk Roulette is run every 60 mins, do !join to join when it starts. If you win you get a RANDOM place in the waitlist!");}}};

bot.commands.staffCommand = {
command: 'staff',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Tips for trying to get staff: https://git.io/fNRTx");}}};  

bot.commands.whatissubCommand = {
command: 'subinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me What are subscriptions? http://goo.gl/Lcw6wX");}}};

bot.commands.twitchCommand = {
command: 'twitch',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me No Twitch yet.");}}};

bot.commands.twitchliveCommand = {
command: 'twitchlive',
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me We're live, so someone must have hacked us. Tune in (if you can find us) and take screenshots! kthx");}}};

//
bot.loadChat();}
localStorage.setItem("basicBotsettings", JSON.stringify({

botName: "nullBot",
language: "english",
chatLink: "https://rawgit.com/wingnaut/drunkbot/master/lang/en.json",
scriptLink: "https://rawgit.com/wingnaut/drunkbot/master/basicBot.js",
roomlock: false,
startupCap: 1,
startupVolume: 0,
startupEmoji: false,
autowoot: true,
autoskip: false,
smartSkip: true,
cmdDeletion: true,
maximumAfk: 120,
afkRemoval: true,
maximumDc: 180,
bouncerPlus: false,
blacklistEnabled: true,
lockdownEnabled: false,
lockGuard: false,
maximumLocktime: 10,
cycleGuard: false,
maximumCycletime: 10,
voteSkip: false,
voteSkipLimit: 10,
historySkip: true,
thorCommand: true,
timeGuard: true,
maximumSongLength: 10,
autodisable: true,
commandCooldown: 15,
usercommandsEnabled: true,
skipPosition: 1,
skipReasons: [
["theme", "This song does not fit the room theme. "],
["op", "This song is on the OP list. "],
["history", "This song is in the history. "],
["sound", "The song you played had bad sound quality or no sound. "],
["nsfw", "The song you contained was NSFW (image or sound). "],
["unavailable", "The song you played was not available for some users. "]],
afkpositionCheck: 15,
afkRankCheck: "ambassador",
motdEnabled: false,
motdInterval: 5,
motd: "/me Welcome %u to the room!",
filterChat: false,
etaRestriction: false,
welcome: true,
opLink: "https://github.com/wingnaut/drunkbot/blob/master/BLACKLIST.md",
rulesLink: ":skull_and crossbones:",
themeLink: "N/A",
fbLink: "N/A",
youtubeLink: ":skull_and crossbones:",
website: ":skull_and crossbones:",
intervalMessages: [],
messageInterval: 30,
songstats: false,
commandLiteral: "!",
blacklists: {
NSFW: "https://github.com/wingnaut/drunkbot/blob/master/NSFWList.json",
OP: "https://github.com/wingnaut/drunkbot/blob/master/OPList.json",
BANNED: "https://github.com/wingnaut/drunkbot/blob/master/BanList.json"}}));
$.getScript("https://rawgit.com/wingnaut/drunkbot/master/basicBot.js", extend);
}).call(this);
