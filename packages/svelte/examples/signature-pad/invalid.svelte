<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SignaturePad } from "@pisagor/svelte";
</script>

<SignaturePad invalid />
