<script lang="ts">
import { Announcement, AppShell, Badge, Button } from "@pisagor/svelte";
import WarningIcon from "phosphor-svelte/lib/WarningIcon";
import { loremParagraphs } from "./helpers";

let opened = $state(true);
const paragraphs = loremParagraphs(8);
</script>

<AppShell>
  {#if opened}
    <AppShell.Banner class="flex items-center justify-center gap-1 p-2">
      <Announcement
        role="alert"
        title="Something went wrong during the process. Try again or contact support if the problem continues."
      >
        {#snippet badge()}
          <Badge variant="destructive">
            <WarningIcon />
            Process interrupted
          </Badge>
        {/snippet}
      </Announcement>
      <Button onclick={() => (opened = false)} pill size="sm">Dismiss</Button>
    </AppShell.Banner>
  {/if}
  <AppShell.Main>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>
</AppShell>
