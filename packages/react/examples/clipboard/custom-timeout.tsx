import { Clipboard } from "@pisagor/react/clipboard";

export function CustomTimeout() {
  return <Clipboard timeout={5000} value="https://example.com/docs" />;
}
