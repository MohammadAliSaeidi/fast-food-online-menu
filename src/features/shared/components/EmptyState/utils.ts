import { MESSAGES } from './constants';
import { MessageType } from './type';

export const getMessage = (message: MessageType) => {
  if (!message) return '';

  if (typeof message === 'string' && message in MESSAGES) {
    return MESSAGES[message as keyof typeof MESSAGES];
  }

  return message;
};
