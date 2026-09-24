<script lang="ts" setup>
import { Tabs } from "..";
</script>

<template>
  <Tabs.Root default-value="tab-1">
    <Tabs.List>
      <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
      <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
      <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
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
</template>
