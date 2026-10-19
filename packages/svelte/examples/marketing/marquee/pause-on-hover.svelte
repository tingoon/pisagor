<script lang="ts">
  import { Marquee } from "@pisagor/svelte";
  import MarqueeIconRow from "./marquee-icon-row.svelte";
</script>

<Marquee.Root>
  <MarqueeIconRow />
  <Marquee.Edge side="start" />
  <Marquee.Edge side="end" />
</Marquee.Root>
