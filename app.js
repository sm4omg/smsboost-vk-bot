// Этот бот по вступлению в беседы был разработан vk.com/bootovodd и vk.com/sm4omg //

// для приобритения полной версии бота (большего количества бесед = в наличии более 50к бесед) обращаться к создателям. //

// для использования замените токен в vk.setoptions на токен своего аккаунта. //

// Получить токен можно тут: vkhost.github.io (Выбирайте от Kate Mobile) //

// ваш аккаунт не может быть заблокирован за использование этого бота. //

// подписывайтесь на канал по сливам ботов //

// www.youtube.com/c/ТипичныйКодер //

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

// Этот бот по вступлению в беседы был разработан vk.com/bootovodd и vk.com/sm4omg //

// для приобритения полной версии бота (большего количества бесед = в наличии более 50к бесед) обращаться к создателям. //

// для использования замените токен в vk.setoptions на токен своего аккаунта. //

// Получить токен можно тут: vkhost.github.io (Выбирайте от Kate Mobile) //

// ваш аккаунт не может быть заблокирован за использование этого бота. //

// подписывайтесь на канал по сливам ботов //

// www.youtube.com/c/ТипичныйКодер //

