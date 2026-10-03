<script lang="ts">
import { AppShell } from "@pisagor/svelte/app-shell";
import { loremParagraphs } from "./helpers";

const paragraphs = loremParagraphs(8);
</script>

<AppShell>
  <AppShell.Navigation>
    <div class="flex min-h-12 w-full items-center justify-center">
      <h6 class="text-center leading-4">Navigation</h6>
    </div>
  </AppShell.Navigation>

  <AppShell.Panel defaultOpen placement="start">
    <AppShell.PanelHeader>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start panel header</h6>
      </div>
    </AppShell.PanelHeader>
    <AppShell.PanelContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start panel</h6>
      </div>
    </AppShell.PanelContent>
    <AppShell.PanelFooter>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start panel footer</h6>
      </div>
    </AppShell.PanelFooter>
  </AppShell.Panel>

  <AppShell.Main>
    <AppShell.Header>
      <AppShell.PanelTrigger aria-label="Toggle start panel" placement="start" />
      <AppShell.PanelTrigger aria-label="Toggle end panel" placement="end" />
    </AppShell.Header>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>

  <AppShell.Panel defaultOpen placement="end">
    <AppShell.PanelHeader>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End panel header</h6>
      </div>
    </AppShell.PanelHeader>
    <AppShell.PanelContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End panel</h6>
      </div>
    </AppShell.PanelContent>
    <AppShell.PanelFooter>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End panel footer</h6>
      </div>
    </AppShell.PanelFooter>
  </AppShell.Panel>
</AppShell>
