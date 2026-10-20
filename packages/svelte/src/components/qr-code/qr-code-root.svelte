<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { QrCodeRootContract } from "@pisagor/contracts";
  import { withProvider } from "./qr-code.context";

  type Props = ArkRootProps & QrCodeRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<QrCodePrimitive.Root {...root.props}>
  {@render children?.()}
</QrCodePrimitive.Root>
