<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<SegmentGroup.Root
      class="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
      defaultValue="Profile"
    >
      {#each items as item}
<SegmentGroup.Item
          class="px-2 py-1.5 text-sm"
          disabled={item === "Security"}
          value={item}
        >
          {item}
        </SegmentGroup.Item>
{/each}
    </SegmentGroup.Root>
