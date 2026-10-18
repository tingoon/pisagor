import { Clipboard } from "@pisagor/react";

export function WithLabel() {
  return (
    <Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
  );
}
