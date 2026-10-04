<script lang="ts">
import { RadioGroup } from "@pisagor/svelte";
</script>

<RadioGroup
  invalid
  items={[
  { label: "Default", value: "default" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Compact", value: "compact" },
]}
/>
