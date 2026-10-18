<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeOverlayProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./qr-code.context";

  let { children, ...rest }: QrCodeOverlayProps = $props();
  const part = withContext(() => rest, { name: "Overlay" });
</script>

<QrCodePrimitive.Overlay {...part.props}>
  {@render children?.()}
</QrCodePrimitive.Overlay>
