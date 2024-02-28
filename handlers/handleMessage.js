export const  handleMessage=(msg, startGame,bot) =>{
  const username = msg.from.username;
  const firstName = msg.from.first_name;
  const lastName = msg.from.last_name;

  const displayName = username || `${firstName || ''} ${lastName || ''}`;

  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    return bot.sendMessage(chatId, "Hello");
  }
  if (text === "/info") {
    return bot.sendMessage(chatId, `Вас зовут : ${displayName}.`);

  }
  if (text === "/game") {
    return startGame(chatId);
  }
  return bot.sendMessage(chatId, "Не понятно");
}
