<script lang="ts">
import {
  type QrCodeOverlayProps,
  QrCode as QrCodePrimitive,
} from "@ark-ui/svelte/qr-code";
import { cn } from "@pisagor/utils";
import { useQrCode } from "./qr-code.context";

let { class: className, children, ...rest }: QrCodeOverlayProps = $props();
const { slots } = useQrCode();
</script>

<QrCodePrimitive.Overlay
  {...rest}
  class={slots.overlay({ class: cn(className) })}
>
  {@render children?.()}
</QrCodePrimitive.Overlay>
