<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeDownloadTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: QrCodeDownloadTriggerProps = $props();
</script>

<QrCodePrimitive.DownloadTrigger {...rest}>
  {@render children?.()}
</QrCodePrimitive.DownloadTrigger>
