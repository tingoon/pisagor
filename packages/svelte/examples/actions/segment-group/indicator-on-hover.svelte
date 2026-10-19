<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";

  const pages = ["Profile", "Account", "Security", "Notifications"];
  let value = $state("Profile");
  let hoverValue = $state<string | null>(null);
</script>

<SegmentGroup.Root
  class="rounded-lg"
  onValueChange={(next) => (value = next ?? "Profile")}
  value={hoverValue ?? value}
>
  <SegmentGroup.Indicator />
  {#each pages as page (page)}
    <SegmentGroup.Item
      class="px-2 py-1.5 text-sm"
      onclick={() => (value = page)}
      onmouseenter={() => (hoverValue = page)}
      onmouseleave={() => (hoverValue = null)}
      value={page}
    >
      <SegmentGroup.ItemText>{page}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>
