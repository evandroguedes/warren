import api from '../../src/helpers/api';
import {
  sendMessage,
  sendFinish,
} from '../../src/services/suitability/suitabilityService';

jest.mock('../../src/helpers/api', () => ({
  post: jest.fn(),
}));

describe('suitabilityService', () => {
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

  it('should send messages', async () => {
    api.post.mockResolvedValue(postConversationMessageResponseMock());

    const messages = await sendMessage({ id: null, answers: {} });

    expect(api.post).toHaveBeenCalledWith(messageURL, {
      context: 'suitability',
      id: null,
      answers: {},
    });
    expect(messages).toEqual(postConversationMessageResponseMock().data);
  });

  it('should send finish', async () => {
    api.post.mockResolvedValue(postFinishResponseMock());

    const response = await sendFinish({ answers: {} });

    expect(api.post).toHaveBeenCalledWith(finishURL, {
      answers: {},
    });
    expect(response).toEqual(postFinishResponseMock().data);
  });
});
