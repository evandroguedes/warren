import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const suitability = {
  namespaced: true,
  state: () => ({
    messages: [],
    lastMessage: {},
  }),
  mutations,
  actions,
  getters,
};

export default suitability;