import { twitchChatGenerator } from '../src/functions/chatGenerator';

describe('TwitchChatGenerator suite', () => {
  test('twitchChatGenerator should generate a user_id', () => {
    const chatObj = twitchChatGenerator();
    const id = chatObj.user_id;
    expect(id).not.toBeNull();
  });

  test('twitchChatGenerator should generate a chat', () => {
    const chatObj = twitchChatGenerator();
    const chat = chatObj.chat;
    expect(chat).not.toBeNull();
  });

  test('twitchChatGenerator should generate random chats and user_id on each invocation', () => {
    const chatObj1 = twitchChatGenerator();
    const id1 = chatObj1.user_id;
    const chat1 = chatObj1.chat;

    const chatObj2 = twitchChatGenerator();
    const id2 = chatObj2.user_id;
    const chat2 = chatObj2.chat;

    expect(id1).not.toEqual(id2);
    expect(chat1).not.toEqual(chat2);
  });
});



