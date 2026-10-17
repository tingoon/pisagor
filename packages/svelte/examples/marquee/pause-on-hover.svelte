<script module lang="ts">
  import source from "./pause-on-hover.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Marquee } from "@pisagor/svelte";
  import MarqueeIconRow from "./marquee-icon-row.svelte";
</script>

<Marquee.Root>
  <MarqueeIconRow />
</Marquee.Root>
