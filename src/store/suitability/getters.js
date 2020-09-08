import * as types from './types';

const hasItems = (items = [], type) => items.length > 0 ? { items, type } : null;

const getCurrentResponseForm = payload => {
  if (!payload.responses) return null;
  const { buttons, checkbox, id, inputs, radios, responses, rows } = payload;
  const hasButtons = hasItems(buttons, 'buttons');
  const hasCheckbox = hasItems(checkbox, 'checkbox');
  const hasInputs = hasItems(inputs, 'inputs');
  const hasRadios = hasItems(radios, 'radios');
  const hasRows = hasItems(rows, 'rows');
  const result = hasButtons || hasCheckbox || hasInputs || hasRadios || hasRows;

  return { id, result, responses };
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
};
