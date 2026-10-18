import { Clipboard } from "@pisagor/solid";

export function WithLabel() {
  return (
    <Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
  );
}
