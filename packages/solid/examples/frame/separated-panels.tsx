import source from "./separated-panels.tsx?raw";
import { Frame } from "@pisagor/solid";

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
        <h2 class="text-sm font-semibold">Separated panel</h2>
        <p class="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Panel>
        <h2 class="text-sm font-semibold">Separated panel</h2>
        <p class="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
    </Frame>
  );
}

export { source as SeparatedPanelsSource };
