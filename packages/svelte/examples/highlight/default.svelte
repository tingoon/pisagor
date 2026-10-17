<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Highlight } from "@pisagor/svelte";
</script>

<p>
  The
  <Highlight query="quick" text="quick brown fox" />
  jumps.
</p>
