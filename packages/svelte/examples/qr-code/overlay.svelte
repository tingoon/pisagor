<script lang="ts">
import { QrCode } from "@pisagor/svelte/qr-code";
import FishIcon from "phosphor-svelte/lib/FishIcon";
</script>

<QrCode>
      <QrCode.Frame />
      <QrCode.Overlay>
        <FishIcon />
      </QrCode.Overlay>
    </QrCode>
