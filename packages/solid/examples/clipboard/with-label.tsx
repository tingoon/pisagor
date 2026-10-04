/** @jsxImportSource solid-js */
import { Clipboard } from "@pisagor/solid/clipboard";

export function WithLabel() {
  return (
    <Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
  );
}
