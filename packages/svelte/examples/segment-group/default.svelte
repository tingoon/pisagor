<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SegmentGroup } from "@pisagor/svelte";
</script>

<SegmentGroup
  defaultValue="daily"
  items={[
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ]}
/>
