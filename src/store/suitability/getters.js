import * as types from './types';
import parseNumberAnswers from '../../helpers/parseNumberAnswers';

const context = 'suitability';

const hasItems = (items = [], type) => items.length > 0 ? { items, type } : null;

const getCurrentResponseForm = payload => {
  if (!payload.responses) return null;
  let { buttons, checkbox, id, inputs, radios, responses, rows } = payload;
  buttons = hasItems(buttons, 'buttons');
  checkbox = hasItems(checkbox, 'checkbox');
  inputs = hasItems(inputs, 'inputs');
  radios = hasItems(radios, 'radios');
  rows = hasItems(rows, 'rows');
  const result = buttons || checkbox || inputs || radios || rows;
  const has = { buttons: !!buttons, checkbox: !!checkbox, inputs: !!inputs, radios: !!radios, rows: !!rows };

  return { id, result, responses, has };
};

const blankReplyFormResponse = {
  id: null,
  result: {
    items: [],
  },
  responses: [],
};

export default {
  [types.CURRENT_MESSAGE]: state => state.messages[state.currentMessageIndex],
  [types.IS_CURRENT_MESSAGE_THE_LAST_ONE]: state => state.currentMessageIndex === (state.messages.length - 1),
  [types.CURRENT_REPLY_FORM]: state => getCurrentResponseForm(state.lastMessage.data) || blankReplyFormResponse,
  [types.CURRENT_ANSWER_PAYLOAD]: state => ({ id: state.lastMessage?.data?.id, context, answers: parseNumberAnswers(state.answers) }),
  [types.CURRENT_ANSWER]: state => state.answersHistory[state.currentAnswerIndex],
};
