import source from "./default.tsx?raw";
import { Frame } from "@pisagor/react";

export function Default() {
  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>
          Brief description about the section
        </Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="text-sm font-semibold">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Frame.Footer>
    </Frame>
  );
}

export { source as DefaultSource };
