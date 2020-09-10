import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as TYPES from '../../src/store/suitability/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import SuitabilityResponseOrganism from '../../src/components/suitability/organisms/SuitabilityResponseOrganism';

function shallowMountComponent(props, store) {
  return shallowMount(SuitabilityResponseOrganism, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

describe('SuitabilityResponseOrganism', () => {

  let getters;
  let mutations;
  let store;
  let state;

  beforeEach(() => {
    getters = {
      [TYPES.CURRENT_MESSAGE]: jest.fn(),
      [TYPES.CURRENT_ANSWER]: jest.fn(),
      [TYPES.IS_CURRENT_MESSAGE_THE_LAST_ONE]: jest.fn(),
    };
    
    mutations = {
      [TYPES.MUTATE_NEXT_MESSAGE]: jest.fn(),
      [TYPES.MUTATE_TOGGLE_FOOTER_VISIBILTY]: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        suitability: {
          state,
          getters,
          mutations,
          namespaced : true,
        },
      },
    });
  })

  it('should trigger move to next message mutation', () => {
    const wrapper = shallowMountComponent(null, store);
    wrapper.vm.nextMessage();
    expect(mutations[TYPES.MUTATE_NEXT_MESSAGE]).toHaveBeenCalled();
  });

  it('should trigger move to next message mutation on type complete if it is the last message', () => {
    getters[TYPES.IS_CURRENT_MESSAGE_THE_LAST_ONE].mockReturnValue(true);
    const wrapper = shallowMountComponent(null, store);
    wrapper.vm.onTypeComplete();
    expect(mutations[TYPES.MUTATE_NEXT_MESSAGE]).not.toHaveBeenCalled();
  });

  it('should trigger footer on type complete if it is the last message', () => {
    getters[TYPES.IS_CURRENT_MESSAGE_THE_LAST_ONE].mockReturnValue(true);
    const wrapper = shallowMountComponent(null, store);
    wrapper.vm.onTypeComplete();
    expect(mutations[TYPES.MUTATE_TOGGLE_FOOTER_VISIBILTY]).toHaveBeenCalled();
  });

});
