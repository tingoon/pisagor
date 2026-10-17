<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<NumberInput defaultValue="10" disabled />
