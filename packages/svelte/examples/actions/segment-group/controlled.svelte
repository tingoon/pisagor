<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";

  let value = $state<string | null>("Profile");
</script>

<SegmentGroup
  class="rounded-lg"
  items={[
    { label: "Profile", value: "Profile" },
    { label: "Account", value: "Account" },
    { label: "Security", value: "Security" },
    { label: "Notifications", value: "Notifications" },
  ]}
  onValueChange={(next) => (value = next)}
  {value}
/>
