<script lang="ts">
import {
  type ClipboardIndicatorProps,
  Clipboard as ClipboardPrimitive,
} from "@ark-ui/svelte/clipboard";
import { withContext } from "./clipboard.context";

let { children, ...rest }: ClipboardIndicatorProps = $props();
const part = withContext(() => rest, { name: "Indicator" });
</script>

<ClipboardPrimitive.Indicator {...part.props}>
  {@render children?.()}
</ClipboardPrimitive.Indicator>
