<script lang="ts">
  import type { QrCodeContract } from "@pisagor/contracts";
  import type { ComponentProps, Snippet } from "svelte";
  import QrCodeFrame from "./qr-code-frame.svelte";
  import QrCodeOverlay from "./qr-code-overlay.svelte";
  import QrCodePattern from "./qr-code-pattern.svelte";
  import QrCodeRoot from "./qr-code-root.svelte";

  type Props = Omit<ComponentProps<typeof QrCodeRoot>, "children"> &
    QrCodeContract & {
      /** Content centered over the pattern, e.g. a logo. */
      overlay?: Snippet;
    };

  let { classNames, overlay, ...rest }: Props = $props();
</script>

<QrCodeRoot {...rest}>
  <QrCodeFrame class={classNames?.frame}>
    <QrCodePattern class={classNames?.pattern} />
  </QrCodeFrame>
  {#if overlay}
    <QrCodeOverlay class={classNames?.overlay}
      >{@render overlay()}</QrCodeOverlay
    >
  {/if}
</QrCodeRoot>
