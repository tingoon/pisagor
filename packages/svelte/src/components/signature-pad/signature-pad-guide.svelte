<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadGuideProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./signature-pad.context";

  let { children, ...rest }: SignaturePadGuideProps = $props();
  const part = withContext(() => rest, { name: "Guide" });
</script>

<SignaturePadPrimitive.Guide {...part.props}>
  {@render children?.()}
</SignaturePadPrimitive.Guide>
