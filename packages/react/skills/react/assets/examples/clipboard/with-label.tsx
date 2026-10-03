import { Clipboard } from "@pisagor/react/clipboard";

export function WithLabel() {
  return (
    <Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
  );
}
