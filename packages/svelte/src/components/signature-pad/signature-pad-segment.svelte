<script lang="ts">
import {
  SignaturePad as SignaturePadPrimitive,
  type SignaturePadSegmentProps,
} from "@ark-ui/svelte/signature-pad";
import { withContext } from "./signature-pad.context";

let { ...rest }: SignaturePadSegmentProps = $props();
const part = withContext(() => rest, { name: "Segment" });
</script>

<SignaturePadPrimitive.Segment {...part.props} />
