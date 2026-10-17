<script module lang="ts">
  import source from "./overlay.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
  import FishIcon from "phosphor-svelte/lib/FishIcon";
</script>

<QrCode>
  <QrCode.Frame />
  <QrCode.Overlay>
    <FishIcon />
  </QrCode.Overlay>
</QrCode>
