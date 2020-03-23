const { VK, keyboard } = require('vk-io');
const vk = new VK();
const rq = require("prequest");
const { api } = vk;
const fs = require("fs");
const colors = require('colors');
var besedi_arr2 = fs.readFileSync('index.txt').toString().split("\n");

var z = colors.green;

const sm4omg = require("./sm4omg");

vk.setOptions({ token: 'ebat'}); // Токен стр вк
const { updates, snippets } = vk;

updates.startPolling();
console.log(`
███████████████████████████████████████
█───█─███─█───█────██────█────█───█───█
█─███──█──█─███─██──█─██─█─██─█─████─██
█───█─█─█─█───█────██─██─█─██─█───██─██
███─█─███─███─█─██──█─██─█─██─███─██─██
█───█─███─█───█────██────█────█───██─██
███████████████████████████████████████
`)

setInterval(() => {
vk.api.call("messages.joinChatByInviteLink", {link: (besedi_arr2[sm4omg.besedi_i2])})
sm4omg.besedi_i2++;
 console.log(z('MESSAGE ADDED'));
}, 60000); 



