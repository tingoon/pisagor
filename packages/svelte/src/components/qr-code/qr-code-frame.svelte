<script lang="ts">
import {
  type QrCodeFrameProps,
  QrCode as QrCodePrimitive,
} from "@ark-ui/svelte/qr-code";
import { cn } from "@pisagor/utils";
import { useQrCode } from "./qr-code.context";

let { class: className, ...rest }: QrCodeFrameProps = $props();
const { slots } = useQrCode();
</script>

<QrCodePrimitive.Frame {...rest} class={slots.frame({ class: cn(className) })}>
  <QrCodePrimitive.Pattern class={slots.pattern()} />
</QrCodePrimitive.Frame>
