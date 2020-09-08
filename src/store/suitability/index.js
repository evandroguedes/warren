import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const suitability = {
  namespaced: true,
  state: () => ({
    answers: {},
    answersHistory: [],
    currentAnswerIndex: 0,
    messages: [],
    lastMessage: {},
    currentMessageIndex: 0,
    shouldShowFooter: false,
    nameInitial: '',
    finishResult: {},
  }),
  mutations,
  actions,
  getters,
};

export default suitability;