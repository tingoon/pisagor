<script lang="ts">
import {
  type SignaturePadGuideProps,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/svelte/signature-pad";
import { withContext } from "./signature-pad.context";

let { children, ...rest }: SignaturePadGuideProps = $props();
const part = withContext(() => rest, { name: "Guide" });
</script>

<SignaturePadPrimitive.Guide {...part.props}>
  {@render children?.()}
</SignaturePadPrimitive.Guide>
