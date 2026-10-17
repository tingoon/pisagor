<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Toolbar } from "@pisagor/svelte";
</script>

<Toolbar description="Manage your workspace" title="Projects">
  {#snippet actions()}
    <button type="button">New</button>
  {/snippet}
</Toolbar>
