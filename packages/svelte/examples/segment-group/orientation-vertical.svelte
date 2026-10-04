<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<SegmentGroup.Root
      class="rounded-lg"
      defaultValue="Profile"
      orientation="vertical"
    >
      {#each items as item}
<SegmentGroup.Item
          class="px-2 py-1.5 text-sm"
          value={item}
        >
          {item}
        </SegmentGroup.Item>
{/each}
    </SegmentGroup.Root>
