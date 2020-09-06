import api from '../../src/helpers/api';
import { postConversationMessage } from '../../src/resources/suitability/suitabilityResource';

jest.mock('../../src/helpers/api', () => ({
  post: jest.fn(),
}));

const url = 'https://api.dev.oiwarren.com/api/v2/conversation/message';

const postConversationMessageResponseMock = () => ({
  data: {
  },
  status: 200,
});

it('should post conversation message', async () => {
  api.post.mockResolvedValue(postConversationMessageResponseMock());

  const messages = await postConversationMessage({ id: null, answers: {} });

  expect(api.post).toHaveBeenCalledWith(url, { 
    context: 'suitability',
    id: null,
    answers: {}
  });

  expect(messages).toEqual(postConversationMessageResponseMock());
});
