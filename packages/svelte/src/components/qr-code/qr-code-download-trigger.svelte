<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeDownloadTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./qr-code.context";

  let { children, ...rest }: QrCodeDownloadTriggerProps = $props();
  const part = withContext(() => rest, { name: "DownloadTrigger" });
</script>

<QrCodePrimitive.DownloadTrigger {...part.props}>
  {@render children?.()}
</QrCodePrimitive.DownloadTrigger>
