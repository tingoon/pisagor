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
