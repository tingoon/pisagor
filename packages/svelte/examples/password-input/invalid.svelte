<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";
</script>

<PasswordInput invalid placeholder="••••••••" />
