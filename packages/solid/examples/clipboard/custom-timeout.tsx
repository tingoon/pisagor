import source from "./custom-timeout.tsx?raw";
import { Clipboard } from "@pisagor/solid";

export function CustomTimeout() {
  return <Clipboard timeout={5000} value="https://example.com/docs" />;
}

export { source as CustomTimeoutSource };
