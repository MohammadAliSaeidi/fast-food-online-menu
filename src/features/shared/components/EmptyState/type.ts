import { MESSAGES } from './constants';

export type MessageType = keyof typeof MESSAGES | Omit<string, keyof typeof MESSAGES>;
