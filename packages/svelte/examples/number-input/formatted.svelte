<script module lang="ts">
  import source from "./formatted.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<NumberInput
  defaultValue="1000"
  formatOptions={{ currency: "USD", style: "currency" }}
/>
