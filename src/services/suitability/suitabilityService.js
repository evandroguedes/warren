import * as suitabilityResource from '../../resources/suitability/suitabilityResource';

export const sendMessage = async ({ id, answers }) => {
  const { data } = await suitabilityResource.postConversationMessage({ id, answers });
  return data;
};

export const sendFinish = async ({ answers }) => {
  const { data } = await suitabilityResource.postFinish({ answers });
  return data;
};