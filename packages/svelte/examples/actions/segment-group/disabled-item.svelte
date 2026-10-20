<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";
</script>

<SegmentGroup
  class="rounded-lg"
  defaultValue="Profile"
  items={[
    { label: "Profile", value: "Profile" },
    { label: "Account", value: "Account" },
    { disabled: true, label: "Security", value: "Security" },
    { label: "Notifications", value: "Notifications" },
  ]}
/>
