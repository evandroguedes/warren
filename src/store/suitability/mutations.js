import * as types from './types';

export default {
  [types.MUTATE_LAST_MESSAGES]: (state, payload) => {
    state.lastMessage = payload;
  },
  [types.MUTATE_MESSAGES]: (state, payload) => {
    state.messages = [...state.messages, ...payload.messages];
  },
};