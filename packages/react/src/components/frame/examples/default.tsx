import { Frame } from "..";

export function Default() {
  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>Brief description about the section</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Frame.Footer>
    </Frame>
  );
}
