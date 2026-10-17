<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Toggle } from "@pisagor/svelte";
</script>

<Toggle disabled variant="outline">Unavailable</Toggle>
