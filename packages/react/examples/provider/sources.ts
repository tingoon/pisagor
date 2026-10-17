import { DefaultSource as Default } from "./default";
import { MessagesSource as Messages } from "./messages";

export const imports = `import { Breadcrumb, Provider } from "@pisagor/react";`;

export const sources = {
  Default,
  Messages,
} as const;
