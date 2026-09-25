<script lang="ts">
import type { QrCodeFrameProps } from "@ark-ui/svelte/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/svelte/qr-code";
import { cn } from "@pisagor/utils";
import { useQrCode } from "./qr-code.context";

type Props = Omit<QrCodeFrameProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useQrCode();
</script>

<QrCodePrimitive.Frame {...rest} class={slots.frame({ class: cn(className) })}>
  <QrCodePrimitive.Pattern class={slots.pattern()} />
</QrCodePrimitive.Frame>
