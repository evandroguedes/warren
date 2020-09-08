import api from '../../helpers/api';

const BASE_URL = 'https://api.dev.oiwarren.com/';
const context = 'suitability';

export function postConversationMessage({ id, answers }) {
  return api.post(`${BASE_URL}api/v2/conversation/message`, {
    context,
    id,
    answers,
  });
}

export function postFinish({ answers }) {
  return api.post(`${BASE_URL}api/v2/${context}/finish`, {
    answers,
  });
}
