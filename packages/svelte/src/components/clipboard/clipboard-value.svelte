<script lang="ts">
import {
  Clipboard as ClipboardPrimitive,
  type ClipboardValueTextProps,
} from "@ark-ui/svelte/clipboard";
import { withContext } from "./clipboard.context";

let { children, ...rest }: ClipboardValueTextProps = $props();
const part = withContext(() => rest, { name: "Value" });
</script>

<ClipboardPrimitive.ValueText {...part.props} {children} />
