import * as suitabilityService from '../../services/suitability/suitabilityService';
import * as types from './types';
import templateParser from '../../helpers/templateParser';
import isNameQuestion from '../../helpers/isNameQuestion';

const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const FINAL_ID = 'final';

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
      return response;
    }
  },
  [types.POST_ANSWER]: async ({ getters, dispatch, commit, state }, { label }) => {
    const hasMoreThanOneAnswerOnHistory = state.answersHistory.length > 0;
    if (hasMoreThanOneAnswerOnHistory) commit(types.MUTATE_NEXT_ANSWER);

    const currentAnswerID = state.lastMessage.data?.id;
    const currentAnswersObject = state.answers;
    const currentAnswerPayload = getters[types.CURRENT_ANSWER_PAYLOAD];
    const [answerTemplate] = state.lastMessage.data?.responses;
    const currentAnswerParsed = [templateParser(answerTemplate, { answers: currentAnswersObject }, currentAnswersObject[currentAnswerID])];
    const isNameAsked = isNameQuestion(currentAnswerID);
    const answers = label ? [label] : currentAnswerParsed;
    
    if (isNameAsked) commit(types.MUTATE_NAME_INITIAL);
    
    commit(types.MUTATE_ANSWERS_HISTORY, answers);

    const response = await dispatch(types.POST_MESSAGE, currentAnswerPayload).catch(error => {
      console.error(error);
    })
    if (response) {
      commit(types.MUTATE_NEXT_MESSAGE);
      commit(types.MUTATE_TOGGLE_FOOTER_VISIBILTY);
      const responseAnswerID = response.id;
      const isFinish = responseAnswerID === FINAL_ID;
      if (isFinish) return dispatch(types.POST_FINISH, currentAnswerPayload);
    }
  },
  [types.POST_FINISH]: async ({ commit }, { answers }) => {

    commit(types.MUTATE_FINISH, loadingStatus);

    const response = await suitabilityService.sendFinish({ answers }).catch(error => {
      const code = error.response ? error.response.status : 501;
      commit(types.MUTATE_FINISH, {
        data: {},
        error,
        code,
        status: REQUEST_STATUS.ERROR,
      });
    });
    if (response) {
      commit(types.MUTATE_FINISH, response);
      return response;
    }
  },
};
