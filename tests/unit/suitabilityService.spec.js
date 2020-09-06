import api from '../../src/helpers/api';
import {
  sendMessage,
} from '../../src/services/suitability/suitabilityService';

jest.mock('../../src/helpers/api', () => ({
  post: jest.fn(),
}));

describe('suitabilityService', () => {
  const url = 'https://api.dev.oiwarren.com/api/v2/conversation/message';

  const postConversationMessageResponseMock = () => ({
    data: {
    },
    status: 200,
  });

  it('should send messages', async () => {
    api.post.mockResolvedValue(postConversationMessageResponseMock());

    const messages = await sendMessage({ id: null, answers: {} });

    expect(api.post).toHaveBeenCalledWith(url, {
      context: 'suitability',
      id: null,
      answers: {},
    });
    expect(messages).toEqual(postConversationMessageResponseMock().data);
  });
});
