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
  <AppShell.Main>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>
</AppShell>
