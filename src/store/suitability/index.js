import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const suitability = {
  namespaced: true,
  state: () => ({
    messages: [],
    lastMessage: {},
    currentMessage: [],
    currentMessageIndex: 0,
  }),
  mutations,
  actions,
  getters,
};

export default suitability;