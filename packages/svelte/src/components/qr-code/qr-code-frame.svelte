<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeFrameProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./qr-code.context";

  let { children, ...rest }: QrCodeFrameProps = $props();
  const part = withContext(() => rest, { name: "Frame" });
</script>

<QrCodePrimitive.Frame {...part.props}>
  {@render children?.()}
</QrCodePrimitive.Frame>
