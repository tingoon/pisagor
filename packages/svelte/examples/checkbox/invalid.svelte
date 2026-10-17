<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Checkbox } from "@pisagor/svelte";
</script>

<Checkbox invalid />
