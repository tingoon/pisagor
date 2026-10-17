<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Switch } from "@pisagor/svelte";
</script>

<Switch invalid />
