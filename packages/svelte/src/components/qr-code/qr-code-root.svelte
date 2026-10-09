<script lang="ts">
import {
  type QrCodeRootProps as ArkRootProps,
  QrCode as QrCodePrimitive,
} from "@ark-ui/svelte/qr-code";
import type { QrCodeProps as BaseQrCodeProps } from "@pisagor/props";
import { withProvider } from "./qr-code.context";
import QrCodeFrame from "./qr-code-frame.svelte";

type Props = ArkRootProps & BaseQrCodeProps;

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
