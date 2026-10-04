<script lang="ts">
import { SegmentGroup } from "@pisagor/svelte";

const items = ["Profile", "Account", "Security", "Notifications"];
let value = $state<string | null>("Profile");
</script>

<SegmentGroup.Root
  class="rounded-lg"
  onValueChange={(next) =>
    (value = typeof next === "string" ? next : (next?.value ?? next))}
  {value}
>
  {#each items as item}
    <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
      {item}
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
