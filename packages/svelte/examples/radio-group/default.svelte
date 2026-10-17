<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RadioGroup } from "@pisagor/svelte";
</script>

<RadioGroup
  items={[
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
  ]}
/>
