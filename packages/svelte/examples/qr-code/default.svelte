<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
</script>

<QrCode value="https://pisagor.dev" />
