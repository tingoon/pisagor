<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ClientOnly } from "@pisagor/svelte";
</script>

<ClientOnly>
  <p>Client-only content</p>
</ClientOnly>
