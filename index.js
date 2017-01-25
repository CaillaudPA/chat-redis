var readlineSync = require('readline-sync');
var userName = readlineSync.question('Nom du pseudo ? ');


var redis = require("redis");
var sub = redis.createClient(), pub = redis.createClient();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (input) => {
  pub.publish("chat", userName + " : " + input);
});

sub.on("message", function (channel, message) {
    console.log(message);
});

sub.subscribe("chat");
