<script lang="ts">
import {
  type ClipboardControlProps,
  Clipboard as ClipboardPrimitive,
} from "@ark-ui/svelte/clipboard";
import { withContext } from "./clipboard.context";

let { children, ...rest }: ClipboardControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<ClipboardPrimitive.Control {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Control>
