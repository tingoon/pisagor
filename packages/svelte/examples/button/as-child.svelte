<script lang="ts">
import { Button } from "@pisagor/svelte/button";
</script>

<Button>
  {#snippet asChild(props)}
    <a href="/login" {...props()}>Login</a>
  {/snippet}
</Button>
