<script lang="ts">
import { SignaturePad } from "@pisagor/svelte";

let paths: string[] = $state([]);
</script>

<SignaturePad
  onDraw={(details) => (paths = details.paths)}
  onDrawEnd={(details) => (paths = details.paths)}
  {paths}
/>
