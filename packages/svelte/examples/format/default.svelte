<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Format } from "@pisagor/svelte";
</script>

<p><Format.Number value={1000} /></p>
<p><Format.Byte value={1024} /></p>
<p><Format.RelativeTime value={new Date(Date.now() - 60_000)} /></p>
