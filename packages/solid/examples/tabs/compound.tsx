import source from "./compound.tsx?raw";
import { Tabs } from "@pisagor/solid";

export function Compound() {
  return (
    <Tabs.Root defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        class="text-muted-foreground p-4 text-center text-xs"
        value="tab-1"
      >
        Profile content
      </Tabs.Content>
      <Tabs.Content
        class="text-muted-foreground p-4 text-center text-xs"
        value="tab-2"
      >
        Settings content
      </Tabs.Content>
      <Tabs.Content
        class="text-muted-foreground p-4 text-center text-xs"
        value="tab-3"
      >
        Security content
      </Tabs.Content>
    </Tabs.Root>
  );
}

export { source as CompoundSource };
