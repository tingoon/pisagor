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
