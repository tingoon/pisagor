<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeFrameProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useQrCode } from "./qr-code.context";

  let { class: className, ...rest }: QrCodeFrameProps = $props();
  const styles = useQrCode();
  const slots = $derived(styles.slots);
</script>

<QrCodePrimitive.Frame {...rest} class={slots.frame({ class: cn(className) })}>
  <QrCodePrimitive.Pattern class={slots.pattern()} />
</QrCodePrimitive.Frame>
