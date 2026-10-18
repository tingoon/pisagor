<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
  import { FishIcon } from "phosphor-svelte";
</script>

<QrCode>
  <QrCode.Frame />
  <QrCode.Overlay>
    <FishIcon />
  </QrCode.Overlay>
</QrCode>
