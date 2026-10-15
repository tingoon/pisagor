<script lang="ts">
import {
  type ClipboardLabelProps,
  Clipboard as ClipboardPrimitive,
} from "@ark-ui/svelte/clipboard";
import { withContext } from "./clipboard.context";

let { children, ...rest }: ClipboardLabelProps = $props();
const part = withContext(() => rest, { name: "Label" });
</script>

<ClipboardPrimitive.Label {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Label>
