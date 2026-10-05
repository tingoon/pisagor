<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const pages = ["Profile", "Account", "Security", "Notifications"];
let value = $state("Profile");
let hoverValue = $state<string | null>(null);
</script>

<SegmentGroup.Root class="rounded-lg" value={hoverValue ?? value}>
  {#each pages as page}
    <SegmentGroup.Item
      class="px-2 py-1.5 text-sm"
      onclick={() => (value = page)}
      onmouseenter={() => (hoverValue = page)}
      onmouseleave={() => (hoverValue = null)}
      value={page}
    >
      {page}
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
