import * as types from './types';

export default {
  [types.MUTATE_ANSWERS]: (state, payload) => {
    const { id } = state.lastMessage?.data;
    state.answers[id] = payload;
  },
  [types.MUTATE_ANSWERS_HISTORY]: (state, payload) => {
    state.answersHistory = [...state.answersHistory, ...payload];
  },
  [types.MUTATE_LAST_MESSAGES]: (state, payload) => {
    state.lastMessage = payload;
  },
  [types.MUTATE_MESSAGES]: (state, payload) => {
    const messagesValues = payload.messages.map(message => message.value);
    state.messages = [...state.messages, ...messagesValues];
  },
  [types.MUTATE_NAME_INITIAL]: (state) => {
    state.nameInitial = state.answers.question_name[0]?.toUpperCase();
  },
  [types.MUTATE_NEXT_MESSAGE]: (state) => {
    state.currentMessageIndex++;
  },
  [types.MUTATE_NEXT_ANSWER]: (state) => {
    state.currentAnswerIndex++;
  },
  [types.MUTATE_TOGGLE_FOOTER_VISIBILTY]: (state) => {
    state.shouldShowFooter = !state.shouldShowFooter;
  },
  [types.MUTATE_FINISH]: (state, payload) => {
    state.finishResult = payload;
    if (payload.user) {
      state.messages.push(payload.user.investmentProfile?.riskToleranceProfile);
      state.currentMessageIndex++;
    }
  },
};