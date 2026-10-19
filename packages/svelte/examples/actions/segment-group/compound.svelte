<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";

  const items = ["Profile", "Account", "Security", "Notifications"];
</script>

<SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
  <SegmentGroup.Indicator />
  {#each items as item (item)}
    <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
      <SegmentGroup.ItemText>{item}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
