<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Swap } from "@pisagor/svelte/swap";
import MoonIcon from "phosphor-svelte/lib/MoonIcon";
import SunIcon from "phosphor-svelte/lib/SunIcon";

let fade = $state(false);
let flip = $state(false);
let rotate = $state(false);
let scale = $state(false);
</script>

<div class="flex flex-wrap gap-2">
  <Button
    aria-label="Toggle theme"
    onClick={() => (fade = !fade)}
    size="icon-lg"
    variant="outline"
  >
    <Swap swap={fade} variant="fade">
      {#snippet on()}
        <MoonIcon />
      {/snippet}
      {#snippet off()}
        <SunIcon />
      {/snippet}
    </Swap>
  </Button>
  <Button
    aria-label="Toggle theme"
    onClick={() => (flip = !flip)}
    size="icon-lg"
    variant="outline"
  >
    <Swap swap={flip} variant="flip">
      {#snippet on()}
        <MoonIcon />
      {/snippet}
      {#snippet off()}
        <SunIcon />
      {/snippet}
    </Swap>
  </Button>
  <Button
    aria-label="Toggle theme"
    onClick={() => (rotate = !rotate)}
    size="icon-lg"
    variant="outline"
  >
    <Swap swap={rotate} variant="rotate">
      {#snippet on()}
        <MoonIcon />
      {/snippet}
      {#snippet off()}
        <SunIcon />
      {/snippet}
    </Swap>
  </Button>
  <Button
    aria-label="Toggle theme"
    onClick={() => (scale = !scale)}
    size="icon-lg"
    variant="outline"
  >
    <Swap swap={scale} variant="scale">
      {#snippet on()}
        <MoonIcon />
      {/snippet}
      {#snippet off()}
        <SunIcon />
      {/snippet}
    </Swap>
  </Button>
</div>
