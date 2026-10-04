<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<div class="flex flex-col gap-2">
      <SegmentGroup.Root
        class="rounded-lg"
        defaultValue="Profile"
        variant="default"
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
      <SegmentGroup.Root defaultValue="Profile" variant="underline">
        {#each items as item}
<SegmentGroup.Item
            class="px-2 py-1.5 text-sm"
            value={item}
          >
            {item}
          </SegmentGroup.Item>
{/each}
      </SegmentGroup.Root>
      <SegmentGroup.Root
        defaultValue="Profile"
        orientation="vertical"
        variant="underline"
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
    </div>
