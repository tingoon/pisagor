<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Input } from "@pisagor/svelte";
</script>

<Input disabled placeholder="you@example.com" />
