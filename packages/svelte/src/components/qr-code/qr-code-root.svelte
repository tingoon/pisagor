<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodeRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { QrCodeRootContract } from "@pisagor/contracts";
  import { withProvider } from "./qr-code.context";
  import QrCodeFrame from "./qr-code-frame.svelte";

  type Props = ArkRootProps & QrCodeRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<QrCodePrimitive.Root {...root.props}>
  {#if children}
    {@render children()}
  {:else}
    <QrCodeFrame />
  {/if}
</QrCodePrimitive.Root>
