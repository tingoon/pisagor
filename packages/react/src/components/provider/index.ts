import { Provider } from "./provider";

export type { ProviderMessages, ProviderProps } from "./provider";
export type { MessageKey } from "./provider.context";

export {
  getMessage,
  useProviderMessage,
  useProviderMessages,
} from "./provider.context";
export { Provider };
