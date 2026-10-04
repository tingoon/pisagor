<script lang="ts">
import { Tabs } from "@pisagor/svelte/tabs";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import ShieldIcon from "phosphor-svelte/lib/ShieldIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";
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
  <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
    Profile content
  </Tabs.Content>
  <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
    Settings content
  </Tabs.Content>
  <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
    Security content
  </Tabs.Content>
</Tabs.Root>
