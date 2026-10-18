<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { GearIcon, ShieldIcon, UserIcon } from "phosphor-svelte";
</script>

<Tabs.Root defaultValue="tab-1">
  <Tabs.List>
    <Tabs.Trigger value="tab-1">
      <UserIcon />
      Profile
    </Tabs.Trigger>
    <Tabs.Trigger value="tab-2">
      <GearIcon />
      Settings
    </Tabs.Trigger>
    <Tabs.Trigger value="tab-3">
      <ShieldIcon />
      Security
    </Tabs.Trigger>
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
