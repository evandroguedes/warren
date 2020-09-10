import api from '../../src/helpers/api';
import { postConversationMessage, postFinish } from '../../src/resources/suitability/suitabilityResource';

jest.mock('../../src/helpers/api', () => ({
  post: jest.fn(),
}));

const messageURL = 'https://api.dev.oiwarren.com/api/v2/conversation/message';
const finishURL = 'https://api.dev.oiwarren.com/api/v2/suitability/finish';

const postConversationMessageResponseMock = () => ({
  data: {
  },
  status: 200,
});

const postFinishResponseMock = () => ({
  data: {
  },
  status: 200,
});

it('should post conversation message', async () => {
  api.post.mockResolvedValue(postConversationMessageResponseMock());

  const messages = await postConversationMessage({ id: null, answers: {} });

  expect(api.post).toHaveBeenCalledWith(messageURL, { 
    context: 'suitability',
    id: null,
    answers: {}
  });

  expect(messages).toEqual(postConversationMessageResponseMock());
});

it('should post finish', async () => {
  api.post.mockResolvedValue(postFinishResponseMock());

  const response = await postFinish({ answers: {} });

  expect(api.post).toHaveBeenCalledWith(finishURL, { 
    answers: {}
  });

  expect(response).toEqual(postFinishResponseMock());
});
