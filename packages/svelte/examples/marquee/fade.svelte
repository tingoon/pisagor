<script lang="ts">
import { Marquee } from "@pisagor/svelte";
import MarqueeIconRow from "./marquee-icon-row.svelte";
</script>

<div class="flex w-full flex-col gap-2 overflow-hidden">
  <Marquee.Root pauseOnInteraction showEdges={false}>
    <MarqueeIconRow />
  </Marquee.Root>
  <Marquee.Root pauseOnInteraction reverse>
    <MarqueeIconRow />
  </Marquee.Root>
</div>
