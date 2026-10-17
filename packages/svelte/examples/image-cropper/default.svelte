<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ImageCropper } from "@pisagor/svelte";
</script>

<ImageCropper alt="Crop me" src="https://picsum.photos/400" />
