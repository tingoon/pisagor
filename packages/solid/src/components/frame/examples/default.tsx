import { Frame } from "../index";

export function Default() {
  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>Brief description about the section</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 class="font-semibold text-sm">Section title</h2>
        <p class="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Footer>
        <p class="text-muted-foreground text-sm">Footer</p>
      </Frame.Footer>
    </Frame>
  );
}
