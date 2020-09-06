import * as suitabilityService from '../../services/suitability/suitabilityService';
import * as types from './types';

const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const loadingStatus = {
  data: {},
  error: null,
  status: REQUEST_STATUS.LOADING,
};

export default {
  [types.POST_MESSAGE]: async ({ commit }, payload) => {

    commit(types.MUTATE_LAST_MESSAGES, loadingStatus);

    const response = await suitabilityService.sendMessage(payload).catch(error => {
      const code = error.response ? error.response.status : 501;
      commit(types.MUTATE_LAST_MESSAGES, {
        data: {},
        error,
        code,
        status: REQUEST_STATUS.ERROR,
      });
    });
    if (response) {
      commit(types.MUTATE_MESSAGES, response);
      commit(types.MUTATE_LAST_MESSAGES, {
        data: response,
        error: null,
        status: REQUEST_STATUS.SUCCESS,
      });
    }
  },
};