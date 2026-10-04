<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Toolbar } from "@pisagor/svelte/toolbar";
</script>

<Toolbar class="items-center" title="Team members">
  {#snippet actions()}
    <Button size="sm" variant="outline">Invite</Button>
    <Button size="sm" variant="outline">Export</Button>
    <Button size="sm">Add member</Button>
  {/snippet}
</Toolbar>
