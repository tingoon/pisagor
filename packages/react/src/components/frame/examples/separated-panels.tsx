import { Frame } from "..";

export function SeparatedPanels() {
  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>
          Brief description about the section
        </Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Separated panel</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
    </Frame>
  );
}
