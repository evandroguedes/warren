import * as types from './types';

export default {
  [types.MUTATE_LAST_MESSAGES]: (state, payload) => {
    state.lastMessage = payload;
  },
  [types.MUTATE_MESSAGES]: (state, payload) => {
    const messagesValues = payload.messages.map(message => message.value);
    state.messages = [...state.messages, ...messagesValues];
  },
  [types.NEXT_MESSAGE]: (state) => {
    state.currentMessageIndex++;
  },
};