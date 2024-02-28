import { config } from "./config.js";
import TelegramAPi from "node-telegram-bot-api";
import { gameOptions, againOptions } from "./options.js";
import { handleCallbackQuery } from "./handlers/callback.js";
import { handleMessage } from "./handlers/handleMessage.js";

const bot = new TelegramAPi(config.TELEGRAM_KEY, { polling: true });
//import TelegramAPi from "node-telegram";
//const TelegramAPi = require("node-telegram-bot-api");
const chats = {};

const startGame = async (chatId) => {
  await bot.sendMessage(chatId, "Я загадал от 0 до 9 ");
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  await bot.sendMessage(chatId, "Отгадай", gameOptions);
};

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Начальное приветсвие" },
    { command: "/info", description: "Информация" },
    { command: "/game", description: "Игра отгадай число" },
  ]);


  bot.on("message", async (msg) => {
    await handleMessage(msg, startGame,bot);
  });
  bot.on("callback_query", async (msg) => {
    await handleCallbackQuery(msg, chats, startGame, againOptions);
  });
};
start();
