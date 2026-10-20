<script lang="ts">
  import {
    QrCode as QrCodePrimitive,
    type QrCodePatternProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./qr-code.context";

  let { children, ...rest }: QrCodePatternProps = $props();
  const part = withContext(() => rest, { name: "Pattern" });
</script>

<QrCodePrimitive.Pattern {...part.props}>
  {@render children?.()}
</QrCodePrimitive.Pattern>
