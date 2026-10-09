<script lang="ts">
import {
  type QrCodeOverlayProps,
  QrCode as QrCodePrimitive,
} from "@ark-ui/svelte/qr-code";
import { withContext } from "./qr-code.context";

let { children, ...rest }: QrCodeOverlayProps = $props();
const part = withContext(() => rest, { name: "Overlay" });
</script>

<QrCodePrimitive.Overlay {...part.props}>
  {@render children?.()}
</QrCodePrimitive.Overlay>
