import * as types from './types';

export default {
  [types.CURRENT_MESSAGE]: state => state.messages[state.currentMessageIndex],
  [types.IS_CURRENT_MESSAGE_THE_LAST_ONE]: state => state.currentMessageIndex === (state.messages.length - 1),
};