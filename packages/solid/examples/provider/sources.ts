import { DefaultSource as Default } from "./default";
import { MessagesSource as Messages } from "./messages";

export const imports = `import { Provider } from "@pisagor/solid";`;

export const sources = {
  Default,
  Messages,
} as const;
