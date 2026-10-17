<script module lang="ts">
  import source from "./controlled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Input } from "@pisagor/svelte";

  let value = $state("");
</script>

<Input
  onValueChange={(next) => (value = next)}
  placeholder="Enter your message"
  {value}
/>
