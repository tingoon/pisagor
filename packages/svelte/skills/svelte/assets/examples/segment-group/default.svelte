<script lang="ts">
import { SegmentGroup } from "../../../../../src/components/segment-group/index";
</script>

<SegmentGroup
  defaultValue="daily"
  items={[
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
]}
/>
