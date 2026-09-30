<script lang="ts">
import { Swap } from "@pisagor/svelte/swap";

let swap = $state(false);
</script>

<button onclick={() => (swap = !swap)} type="button">Toggle</button>
<Swap {swap}>
  {#snippet on()}
    On
  {/snippet}
  {#snippet off()}
    Off
  {/snippet}
</Swap>
