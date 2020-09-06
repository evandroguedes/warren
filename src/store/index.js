import Vue from 'vue';
import Vuex from 'vuex';
import suitability from './suitability';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    suitability,
  }
});