<script lang="ts">
import { Toolbar } from "../index";
</script>

<Toolbar description="Manage your workspace" title="Projects">
  {#snippet actions()}
    <button type="button">New</button>
  {/snippet}
</Toolbar>
