<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";

  const items = [
    { label: "Profile", value: "Profile" },
    { label: "Account", value: "Account" },
    { label: "Security", value: "Security" },
    { label: "Notifications", value: "Notifications" },
  ];
</script>

<div class="flex flex-col gap-2">
  <SegmentGroup
    class="rounded-lg"
    defaultValue="Profile"
    {items}
    variant="default"
  />
  <SegmentGroup defaultValue="Profile" {items} variant="underline" />
  <SegmentGroup
    defaultValue="Profile"
    {items}
    orientation="vertical"
    variant="underline"
  />
</div>
