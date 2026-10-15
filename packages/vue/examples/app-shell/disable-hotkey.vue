<script lang="ts" setup>
import { AppShell } from "@pisagor/vue";
import { mainContent, regionTitle } from "./helpers";

const StartPanel = () => regionTitle("Start panel");
const MainContent = () => mainContent("Main");
</script>

<template>
  <AppShell disable-hotkey>
    <AppShell.Panel default-open placement="start">
      <AppShell.PanelContent>
        <StartPanel />
      </AppShell.PanelContent>
    </AppShell.Panel>
    <AppShell.Main>
      <AppShell.Header>
        <AppShell.PanelTrigger
          aria-label="Toggle start panel"
          placement="start"
        />
      </AppShell.Header>
      <MainContent />
    </AppShell.Main>
  </AppShell>
</template>
