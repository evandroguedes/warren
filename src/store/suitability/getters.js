import * as types from './types';

export default {
  [types.SPLITTED_MESSAGES]: state => state.messages.map(message => message.value.split(/(\^[0-9]{1,})/)),
};