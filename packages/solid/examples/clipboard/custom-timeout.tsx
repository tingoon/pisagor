/** @jsxImportSource solid-js */
import { Clipboard } from "@pisagor/solid/clipboard";

export function CustomTimeout() {
  return <Clipboard timeout={5000} value="https://example.com/docs" />;
}
