<script module lang="ts">
  import source from "./controlled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";

  let password = $state("");
</script>

<PasswordInput
  onValueChange={(next) => (password = next)}
  placeholder="Enter password"
  value={password}
/>
