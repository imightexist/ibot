//help iexist has me hostage
var WebSocketClient = require('websocket').client;
var fs = require('fs')
var vm2lib = require('vm2')
var vm2 = new vm2lib.VM({ allowAsync: false });
var ws = new WebSocketClient();
var vm = 'computernewb.com/collab-vm/vm0';
var discord = require('discord.js');
const { encode } = require('punycode');
const token = 'iexists discord token';
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});
let hash = Math.random();
let banned = ['jjjj', 'DFU DIES', 'bbbb'];
let bannedwords = ['!reboot', '!eject cd', '@']
let shortcuts = [];
let votekickyes = [];
let votekickno = [];
let points = [];
const mod = false
const modpass = "OMG I FOUND MOD PASS REAL"
let modchannel;
let chatlog;
const prefix = "d!";
let option1 = 0;
let option2 = 0;
//let currentuser = "iBot d!help"
let notify = null;
let notifyuser = null;
let notifyid = null;
let notifyping = false;
const safe = true;
client.login(token);
client.once("ready", function () {
  client.user.setActivity('CollabVM VM0b0t', { type: "LISTENING" });
  console.log("started");
});
client.on("message", function command(message) {
  if (message.author.bot) return;
  let content = message.content
  if (message.channel.id == 1018853384230547577) {
    if (content == "test") {
      message.reply("Hello World!");
  }}
  if (message.content.startsWith(prefix)) {
    let command = message.content.replace(prefix, '');
	if (message.channel.id == 948316579643400255) {
	message.reply("can only do that in <#1018853384230547577> or other channels sry")
	return;
  }
    if (command == "help") {
      fs.readFile("commands.txt", (err, data) => {
        if (err) return console.error(err);
        message.reply(data.toString());
      });
    }
    if (command == "test") {
      message.reply("Hello World!");
    }
    if (command == "github") {
      message.reply("https://github.com/imightexist/bottest1234/");
    }
    if (command == "about") {
      message.reply("BotTest1234 by iexist");
    }
    if (command == "rockpaperscissors") {
      random = Math.floor(Math.random() * 3) + 1;
      if (random == 1) {
        message.reply("rock");
      } else if (random == 2) {
        message.reply("paper");
      } else {
        message.reply("scissors");
      }
    }
    if (command == "flipcoin") {
      random = Math.floor(Math.random() * 2) + 1;
      if (random == 1) {
        message.reply("heads");
      } else {
        message.reply("tails");
      }
    }
    /*if (command.startsWith("math ")){
        math = command.replace('math ','');
        if (isNaN(eval(math))){
            message.reply("not a number");
        } else if (!(isNaN(eval(math)))){
            message.reply(String(eval(math)));
        }
    }*/
    if (command == "whoami") {
      message.reply(toString(message.author));
    }
    if (command.startsWith("say ")) {
      message.reply(command.replace("say ", ""));
    }
    if (command.startsWith("uppercase ")) {
      message.reply(command.replace("uppercase ", "").toUpperCase());
    }
    if (command.startsWith("lowercase ")) {
      message.reply(command.replace("lowercase ", "").toLowerCase());
    }
    if (command == "invite") {
      message.reply("https://discord.com/api/oauth2/authorize?client_id=860600312170545162&permissions=8&scope=bot");
    }
    if (command.startsWith("contact ")) {
      client.users.cache.get("565341757261348864").send(message.author.username + ": " + command.replace('contact ', ''));
    }
    if (command.startsWith("rickroll ")) {
      client.users.cache.get(message.mentions.users.first().id).send(message.author.username + " rickrolled you");
      client.users.cache.get(message.mentions.users.first().id).send("https://images-ext-2.discordapp.net/external/2rQ2r-jB10nU85_9PhMFLpfPTFODKl1y3LW_iI9POsw/https/i.gifer.com/Am7.gif");
    }
    if (command.startsWith("kick ") && message.guild.me.permissions.has("KICK_MEMBERS") && message.member.permissions.has("KICK_MEMBERS")) {
      message.guild.members.kick(message.mentions.users.first());
      message.reply(message.mentions.users.first().username + " was kicked");
    }
    if (command.startsWith("ban ") && message.guild.me.permissions.has("BAN_MEMBERS") && message.member.permissions.has("BAN_MEMBERS")) {
      message.guild.members.ban(message.mentions.users.first())
      message.reply(message.mentions.users.first().username + " was banned");
    }
    if (message.content == "amogus") {
      message.reply("sus");
    }
    if (command == "ping") {
      message.reply(Date.now() - message.createdTimeStamp + "ms");
    }
	if (command == "quote") {
      const readFileLines = filename =>
      fs
      .readFileSync(filename)
      .toString('UTF8')
      .split('\r\n');
      let mains = readFileLines('main.txt');
      let mainno = Math.random()*mains.length
      var main = mains[Math.floor(Math.random()*mains.length)]
      message.reply(main);
      message.reply("The text was " + parseInt(mainno) + " out of " + mains.length + " chosen");
      mainno = Math.random()*mains.length
	}
    //if (command == "addquote") {
    //  fs.appendFile('main.txt', '\r\n' + command.replace("addquote ", ""), function (err) {
    //  if (err) return console.log(err);
    //  message.reply("Added to the main board")
	//}
    if (command.startsWith("notify ")) {
		if (notify !== null) {
			message.reply("You'll have to wait, another notification is pending")
			return;
		}
      notify = command.replace("notify ", "")
	  notifyuser = message.author.username
	  notifyid = message.author.id
	  notifyping = true
      message.reply("Notified the bot, you will be pinged when they open it");
	  //message.reply(notify + " username:" + notifyuser + " password:" + notifyid + "passwords:<@" + notifyid + ">")
    }
	if (command == "stop" && message.guild.me.permissions.has("KICK_MEMBERS") && message.member.permissions.has("KICK_MEMBERS")) {
		message.reply("Stopping")
		setTimeout(function () {
process.exit(1)
          }, 3000)
		//process.exit(1)
	}
	if (command == "funny") {
      const readFileLines = filename =>
      fs
      .readFileSync(filename)
      .toString('UTF8')
      .split('\r\n');
      let lines = readFileLines('funny.txt');
      let lineno = Math.random()*lines.length
      var line = lines[Math.floor(Math.random()*lines.length)]
      message.reply(line);
      message.reply("The text was " + parseInt(lineno) + " out of " + lines.length + " chosen");
      lineno = Math.random()*lines.length
	}
	if (command == "reset" && safe == false && message.guild.me.permissions.has("KICK_MEMBERS") && message.member.permissions.has("KICK_MEMBERS")) {
		if (notify == null) {
			message.reply("Notify is null")
			return;
		}
		notifyping = true
		message.reply("Done")
	}
	
	if (message.channel.id == 1018853384230547577) {
      if (command == "ahh") {
          message.reply("i agree yur dum")
  }}}
	
});

function connect() {
  ws.on('connect', function (f) {
    function send(string) {
      f.sendUTF(encodeCommand(['chat', string]));
    }
    function changeUsername(string) {
      f.sendUTF('6.rename,' + string.length + '.' + string + ';');
    }
    f.on('message', function (message) {
      var cmd = decodeCommand(message.utf8Data);
      changeUsername("iBot d!help");
      //console.log(cmd);
      var username = cmd[1];
      let command = cmd[2];
      var prefix = "d!";
	  if (mod == true) {
	  f.sendUTF(encodeCommand(['admin', '2', modpass]))
	  }
      //var args = command.slice(prefix.length).split(' ');

      //now here is the fun part
      //fuck you stupid error
      if (cmd[0] == "chat") {
        console.log(cmd)
		/*if (cmd[2].search(/@everyone/i) !== -1) {
			client.channels.cache.get("1000826848948801636").send("[REDACTED]")
			return;
		} else if (cmd[2].search(/@here/i) !== -1)
			client.channels.cache.get("1000826848948801636").send("[REDACTED]")
			return;
	}*/
        client.channels.cache.get("1000826848948801636").send(cmd[1] + ": " + cmd[2]);
		console.log(cmd[2])
        if (username == "iBot d!help" || 	banned.includes(username)) {
          return;
        }
        if (command.startsWith(prefix + "echo ")) {
			if (command.replace(prefix + 'echo ', '').search(/is feces/i) !== -1) {
				send("jjjj found! kicking him in the balls....")
				return;
			}
          send(command.replace(prefix + 'echo ', ''));
        }
        if (command.startsWith(prefix + "say ")) {
			if (command.replace(prefix + 'say ', '').search(/is feces/i) !== -1) {
				send("jjjj found! kicking him in the balls....")
				return;
			}
          send(command.replace(prefix + 'say ', ''));
        }
        if (command.startsWith(prefix + "eval " + hash.toString())) {
          try {
            //send(eval(command.replace(prefix + "eval " + hash.toString(),"")))
            send(vm2.run(command.replace(prefix + "eval " + hash.toString(), "")).toString())
          } catch (e) {
            send(e)
          }

          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }
        if (command == prefix + "test") {
          send("hello world");
        }
        if (command == prefix + "whoami") {
          send(username);
        }
        if (command == prefix + "help") {
          send("https://raw.githubusercontent.com/imightexist/ibot/main/help.txt");
        }
        if (command == prefix + "github") {
          send("https://github.com/imightexist/ibot");
        }
        if (command == prefix + "about") {
          send("hello i am CollabVM bot");
        }
        if (command.startsWith(prefix + "stop ")) {
          if (command.replace(prefix + "stop ", "") == hash.toString()) {
            send("Stopping");
            process.exit(1)
          } else {
            send("ayo trying to stop the bot not cool man");
          }
        }
        if (command == prefix + "rockpaperscissors") {
          random = Math.floor(Math.random() * 3) + 1;
          if (random == 1) {
            send("rock");
          } else if (random == 2) {
            send("paper");
          } else {
            send("scissors");
          }
        }
        if (command.startsWith(prefix + "tagcreate ")) {
          shortcuts.push([command.split(" ")[1], command.replace(prefix + "tagcreate " + command.split(" ")[1] + " ", "")])
		            send(prefix + 'tag ' + command.split(" ")[1] + ' will now send back ' + command.replace(prefix + "tagcreate " + command.split(" ")[1] + " ", ""))
        }
        if (command.startsWith(prefix + "tag ")) {
          shortcuts.forEach(function (a) {
            if (a[0] == command.replace(prefix + "tag ", "")) {
              send(a[1]);
            }
          });
        }
        if (command.startsWith(prefix + "insult ")) {
          send(command.replace(prefix + "insult ", "") + " (user) is so yummy yummy yummy yummy fat fat fat")
        }
        if (command == prefix + "hash") {
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
          send("Hash sent to a private discord channel");
        }
        if (command == prefix + "truth") {
          send("jjjj sucks dick");
        }
        if (command == prefix + "flipcoin") {
          random = Math.floor(Math.random() * 2);
          if (random == 1) {
            send("heads");
          } else {
            send("tails");
          }
        }
        if (command.startsWith(prefix + "uppercase ")) {
          send(command.replace(prefix + "uppercase ", "").toUpperCase());
        }
        if (command.startsWith(prefix + "lowercase ")) {
          send(command.replace(prefix + "lowercase ", "").toLowerCase());
        }
        if (command.startsWith(prefix + "ban " + hash + " ")) {
          //send("wow! " + username + " (user) is so utterly retarded! can you believe it?");

          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
          banned.push(command.replace(prefix + "ban " + hash + " ", ""));
          send("User is now blocked from using this bots commands");
        }
        if (command.startsWith(prefix + "unban " + hash + " ")) {
          //send("wow! " + username + " (user) is so utterly retarded! can you believe it?");
          
            hash = Math.random();
            client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
            banned = banned.filter(e => e !== command.replace(prefix + "unban " + hash + " ", ""));
            send("User is now unblocked from using this bots commands");
        }
		//imported from iexist
		if (command.startsWith(prefix + "poll " + hash + " ")) {
          //send("wow! " + username + " (user) is so utterly retarded! can you believe it?");
          send("Poll: " + command.replace(prefix + "poll " + hash + " ", ""))
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
          option1 = 0
          option2 = 0

        }
        if (command == prefix + "option1") {
          option1++
          send("Option1 now has: " + option1);
        }
        if (command == prefix + "option2") {
          option2++
          send("Option2 now has: " + option2);
        }
        if (command == prefix + "pointscreate") {
          points.push([username,0]);
          send("You now have a points account :D")
        }
        if (command == prefix + "points") {
          points.forEach(function (a) {
            if (a[0] == username) {
              send("Points:" + a[1]);
            }
          });
        }
        if (command.startsWith(prefix + "pointsadd " + hash + " ")) {
          user = command.replace(prefix + "pointsadd " + hash + " ", "")
          points.forEach(function (a) {
            if (a[0] == user) {
              a[1] += 1
              send("Points:" + a[1]);
            }
          });
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }
        if (command.startsWith(prefix + "pointsremove " + hash + " ")) {
          user = command.replace(prefix + "pointsremove " + hash + " ", "")
          points.forEach(function (a) {
            if (a[0] == user) {
              a[1] -= 1
              send("Points:" + a[1]);
            }
          });
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }
		        if (command.startsWith(prefix + "pointsreset " + hash + " ")) {
          user = command.replace(prefix + "pointsremove " + hash + " ", "")
          points.forEach(function (a) {
            if (a[0] == user) {
              a[1] = 0
            }
          });
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }
        if (command.startsWith(prefix + "pointstransfer ")) {
          user = command.replace(prefix + "pointstransfer ", "")
          points.forEach(function (a) {
            if (a[0] == user) {
              a[1] += 1
              send("Points transferred");
            }
            if (a[0] == username) {
              a[1] -= 1
            }
          });
        }
        if (command == prefix + "votekickyes" && mod == true) {
          if (votekickyes.includes(username)) {
            return;
          }
          votekickyes.push(username)
          send("Votes for kicking now has: " + votekickyes.length.toString());
        }
        if (command == prefix + "votekickno" && mod == true) {
          if (votekickno.includes(username)) {
            return;
          }
          votekickno.push(username)
          send("Votes for not kicking now has: " + votekickno.length.toString());
        }
        if (command.startsWith(prefix + "votekick ") && mod == true) {
          cantkick = ['iexist', 'CDh8u', 'iBot d!help', 'DankVM-Admin', 'Installbot', 'LeGamer']
          if (cantkick.includes(command.replace(prefix + "votekick ", ""))) {
            send("hes too powerful i cant kick him")
            return;
          }
          votekickyes = []
          votekickno = []
          send("Vote for kicking (15 secs): " + command.replace(prefix + "votekick ", ""))
          setTimeout(function () {
            if (votekickyes.length > votekickno.length) {
              f.sendUTF(encodeCommand(['admin', '15', command.replace(prefix + "votekick ", "")]))
            }
          }, 15000)
        }
        if (command.startsWith(prefix + "vmban " + hash + " ") && mod == true) {
          user = command.replace(prefix + "vmban " + hash + " ", "")
          setInterval(function () {
            f.sendUTF(encodeCommand(['admin', '15', user]))
          }, 2500)
          send(command.replace(prefix + "vmban " + hash + " ", "") + " can no longer access the vm")
          hash = Math.random();
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }
			  //new commands! amazing
	    if (command == prefix + "whatthehell") {
          send("WHAT THE HELL");
        }
		if (command.startsWith(prefix + "impersonate ")) {
			if (command.replace(prefix + "impersonate ", "") == "jjjj") {
				send("No.")
				return;
			} else if (command.replace(prefix + "impersonate ", "") == "DFU DIES") {
				send("No.")
				return;
			}
          changeUsername(command.replace(prefix + "impersonate ", ""));
		  send("Hi, I'm " + command.replace(prefix + "impersonate ", "") + "!");
		  changeUsername("iBot d!help");
        }
		if (command.startsWith(prefix + "hashtest ")) {
          if (command.replace(prefix + "hashtest ", "") == hash) {
		  send("You just won the game")
		} else {
			send("You just lost the game")
		}
        }
		if (command.startsWith(prefix + "fylrobot ")) {
          changeUsername("Fylrobot");
		  send("Fylrobot has been invited by @" + command.replace(prefix + "fylrobot ", "") + "!");
		  changeUsername("iBot d!help");
        }
		/*if (command.startsWith(prefix + "changename " + hash + " ")) {
          currentuser = command.replace(prefix + "changename " + hash + " ", "")
          send("Name changed to " + currentuser)
          hash = Math.random();
		  changeUsername(toString(currentuser))
          client.channels.cache.get("948457042333544458").send("Hash: " + hash.toString());
        }*/
		/*if (command == prefix + "forcepointscreate " + hash + " ") {
          points.push([command.replace(prefix + "forcepointscreate " + hash + " ", ""),0]);
          send("Forced a points account for " + command.replace(prefix + "forcepointscreate " + hash + " ", ""))
        }*/
	    if (command.startsWith(prefix + "funny")) {
			const readFileLines = filename =>
			fs
			.readFileSync(filename)
			.toString('UTF8')
			.split('\r\n');
			let lines = readFileLines('funny.txt');
			let lineno = Math.random()*lines.length
			var line = lines[Math.floor(Math.random()*lines.length)]
			send(line);
			send("The text was " + parseInt(lineno) + " out of " + lines.length + " chosen");
			lineno = Math.random()*lines.length
        }
	    if (command.startsWith(prefix + "term")) {
          var forks = ['pad', 'search', 'web', 'criminal', 'devilish', 'evasive', 'holistic', 'spiffy', 'wild', 'solid', 'seemly', 'sincere', 'able', 'creepy', 'damaging', 'aberrant', 'daily', 'six', 'certain', 'gruesome', 'doubtful', 'lonely', 'disgusted', 'profuse', 'unruly', 'rich', 'aware', 'woebegone', 'wretched', 'inconclusive', 'useless', 'existing', 'broken', 'low', 'deafening', 'wrathful', 'cuddly', 'silent', 'questionable', 'boorish', 'irritating', 'young', 'next', 'null', 'obeisant', 'confident', 'tangible', 'gusty', 'yummy', 'accidental', 'frail'];
          var fork = forks[Math.floor(Math.random()*forks.length)] + forks[Math.floor(Math.random()*forks.length)] + "fag";
		  send(fork)
        }
		//OMG FACT TELLER
		if (command.startsWith(prefix + "addquote ")) {
          fs.appendFile('main.txt', '\r\n' + command.replace(prefix + "addquote ", ""), function (err) {
          if (err) return console.log(err);
          send("Added to the main board")
          });
        }
		if (command.startsWith(prefix + "quote")) {
			const readFileLines = filename =>
			fs
			.readFileSync(filename)
			.toString('UTF8')
			.split('\r\n');
			let mains = readFileLines('main.txt');
			let mainno = Math.random()*mains.length
			var main = mains[Math.floor(Math.random()*mains.length)]
			send(main);
			send("The text was " + parseInt(mainno) + " out of " + mains.length + " chosen");
			mainno = Math.random()*mains.length
        }
		if (command.startsWith(prefix + "dove")) {
			var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			var month = months[Math.floor(Math.random()*months.length)]
			var date = parseInt(Math.random()*31)
			var year = parseInt(Math.random()*31+2000)
			send("No more " + month + " " + date + ", " + year)
        }
		//no more fact teller
		if (command.startsWith(prefix + "notification")) {
			if (notify == null) {
				send("No notifications")
			}
			send(notify)
			send("Sent from " + notifyuser + " (" + notifyid + ")")
			notify = null
        }
		if (command.search(/cums on/i) !== -1 && safe == false) {
			send("???")
		}
	  }
      setInterval(function () {
        if (f.connected) {
          f.sendUTF('3.nop;');
        }
      }, 2500);
    })
  })
  ws.connect('wss://' + vm, 'guacamole');
}
function decodeCommand(string) {
  /*
  var sections = [];
  var bump = 0;
  while (sections.length <= 50 && cypher.length >= bump) {
    var current = cypher.substring(bump);
    var length = parseInt(current.substring(current.search(/\./) - 2));
    var paramater = current.substring(length.toString().length + 1, Math.floor(length / 10) + 2 + length);
    sections[sections.length] = paramater;
    bump += Math.floor(length / 10) + 3 + length;
  }
  sections[sections.length - 1] = sections[sections.length - 1].substring(0, sections[sections.length - 1].length - 1);
  return sections;
  */
  var pos = -1;
  var sections = [];
  for (; ;) {
    var len = string.indexOf('.', pos + 1);
    if (len == -1) {
      break;
    }
    pos = parseInt(string.slice(pos + 1, len)) + len + 1
    sections.push(string.slice(len + 1, pos)
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#x2F;/g, '/')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
    );
    if (string.slice(pos, pos + 1) == ';') {
      break;
    }
  }
  return sections;
}
function encodeCommand(cypher) {
  /*
  var command = "";
  for (var i = 0; i < cypher.length; i++) {
    var current = cypher[i];
    command += current.length + "." + current;
    command += (i < cypher.length - 1 ? "," : ";");
  }
  return command;
  */
  var command = '';
  for (var i = 0; i < cypher.length; i++) {
    var current = cypher[i];
    command += current.length + '.' + current;
    command += (i < cypher.length - 1 ? ',' : ';');
  }
  return command;
}
connect();
