<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SignaturePad } from "@pisagor/svelte";
</script>

<SignaturePad disabled />
