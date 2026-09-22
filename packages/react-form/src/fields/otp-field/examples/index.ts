import { stripTsxExample } from "@pisagor/utils";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { OtpField } from "@pisagor/react-form";`;

export const sources = {
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
} as const;

export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
