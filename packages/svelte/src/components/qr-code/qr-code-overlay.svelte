<script lang="ts">
import type { QrCodeOverlayProps } from "@ark-ui/svelte/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/svelte/qr-code";
import { useQrCode } from "./qr-code.context";

type Props = Omit<QrCodeOverlayProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useQrCode();
</script>

<QrCodePrimitive.Overlay {...rest} class={slots.overlay({ class: className })}>
  {@render children?.()}
</QrCodePrimitive.Overlay>
