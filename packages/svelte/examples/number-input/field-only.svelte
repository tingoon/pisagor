<script module lang="ts">
  import source from "./field-only.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<NumberInput clearable placeholder="Enter a number" />
