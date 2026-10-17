<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
</script>

<QrCode value="https://example.com">
  <QrCode.Frame />
</QrCode>
