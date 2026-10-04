<script lang="ts">
import { Alert } from "@pisagor/svelte";
import MagicWandIcon from "phosphor-svelte/lib/MagicWandIcon";
</script>

<Alert
  class="border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500"
  description="This alert uses a custom color."
  title="Custom color alert"
>
  {#snippet icon()}
    <MagicWandIcon />
  {/snippet}
</Alert>
