<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadClearTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./signature-pad.context";

  let { asChild, children, ...rest }: SignaturePadClearTriggerProps = $props();
  const part = withContext(() => rest, {
    name: "ClearTrigger",
  });
</script>

<SignaturePadPrimitive.ClearTrigger {...part.props} {asChild}>
  {@render children?.()}
</SignaturePadPrimitive.ClearTrigger>
