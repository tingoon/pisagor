<script lang="ts">
import { AppShell } from "@pisagor/svelte";
import { loremParagraphs } from "./helpers";

const paragraphs = loremParagraphs(8);
</script>

<AppShell>
  <AppShell.Navigation>
    <div class="flex items-center gap-2">
      <AppShell.InspectorTrigger
        aria-label="Toggle start inspector"
        placement="start"
      />
      <div class="flex min-h-12 flex-1 items-center justify-center">
        <h6 class="text-center leading-4">Navigation</h6>
      </div>
      <AppShell.InspectorTrigger
        aria-label="Toggle end inspector"
        placement="end"
      />
    </div>
  </AppShell.Navigation>

  <AppShell.Inspector defaultOpen placement="start">
    <AppShell.InspectorHeader>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start inspector header</h6>
      </div>
    </AppShell.InspectorHeader>
    <AppShell.InspectorContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start inspector</h6>
      </div>
    </AppShell.InspectorContent>
    <AppShell.InspectorFooter>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Start inspector footer</h6>
      </div>
    </AppShell.InspectorFooter>
  </AppShell.Inspector>

  <AppShell.Main>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>

  <AppShell.Inspector defaultOpen placement="end">
    <AppShell.InspectorHeader>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End inspector header</h6>
      </div>
    </AppShell.InspectorHeader>
    <AppShell.InspectorContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End inspector</h6>
      </div>
    </AppShell.InspectorContent>
    <AppShell.InspectorFooter>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">End inspector footer</h6>
      </div>
    </AppShell.InspectorFooter>
  </AppShell.Inspector>
</AppShell>
