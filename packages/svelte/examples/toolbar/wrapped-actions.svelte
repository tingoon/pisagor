<script module lang="ts">
  import source from "./wrapped-actions.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Toolbar } from "@pisagor/svelte";
</script>

<Toolbar class="items-center" title="Team members">
  {#snippet actions()}
    <Button size="sm" variant="outline">Invite</Button>
    <Button size="sm" variant="outline">Export</Button>
    <Button size="sm">Add member</Button>
  {/snippet}
</Toolbar>
