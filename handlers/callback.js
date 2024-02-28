export const handleCallbackQuery=(msg, chats, startGame, againOptions) =>{
  const data = msg.data;
  const chatId = msg.message.chat.id;
  if (data === "/again") {
    return startGame(chatId);
  }
  if (parseInt(data) === chats[chatId]) {
    return bot.sendMessage(
      chatId,
      `Ты угадал! бот загадал ${chats[chatId]}`,
      againOptions
    );
  } else {
    return bot.sendMessage(
      chatId,
      `Ты не угадал, бот загадал ${chats[chatId]}`,
      againOptions
    );
  }
}