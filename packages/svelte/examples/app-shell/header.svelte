<script lang="ts">
import { AppShell } from "@pisagor/svelte";
import { loremParagraphs } from "./helpers";

const paragraphs = loremParagraphs(8);
</script>

<AppShell>
  <AppShell.Navigation>
    <div class="flex items-center gap-2">
      <div class="flex min-h-12 flex-1 items-center justify-center">
        <h6 class="text-center leading-4">Navigation</h6>
      </div>
      <AppShell.InspectorTrigger aria-label="Toggle end inspector" placement="end" />
    </div>
  </AppShell.Navigation>

  <AppShell.Panel defaultOpen placement="start">
    <AppShell.PanelContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start panel</h6>
      </div>
    </AppShell.PanelContent>
  </AppShell.Panel>

  <AppShell.Inspector defaultOpen placement="end">
    <AppShell.InspectorContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End inspector</h6>
      </div>
    </AppShell.InspectorContent>
  </AppShell.Inspector>

  <AppShell.Main>
    <AppShell.Header>
      <AppShell.PanelTrigger aria-label="Toggle start panel" placement="start" />
      <div class="flex min-w-0 flex-1 justify-center">
        <h6 class="text-center leading-4">Header</h6>
      </div>
    </AppShell.Header>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>
</AppShell>
