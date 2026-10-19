<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";
</script>

<SegmentGroup
  class="rounded-lg"
  defaultValue="Profile"
  disabled
  items={[
    { label: "Profile", value: "Profile" },
    { label: "Account", value: "Account" },
    { label: "Security", value: "Security" },
    { label: "Notifications", value: "Notifications" },
  ]}
/>
