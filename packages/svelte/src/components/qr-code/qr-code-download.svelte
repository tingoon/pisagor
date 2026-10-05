<script lang="ts">
import {
  type QrCodeDownloadTriggerProps,
  QrCode as QrCodePrimitive,
} from "@ark-ui/svelte/qr-code";

let { children, ...rest }: QrCodeDownloadTriggerProps = $props();
</script>

<QrCodePrimitive.DownloadTrigger {...rest}>
  {@render children?.()}
</QrCodePrimitive.DownloadTrigger>
