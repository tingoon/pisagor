<script lang="ts">
import {
  type ClipboardInputProps,
  Clipboard as ClipboardPrimitive,
} from "@ark-ui/svelte/clipboard";
import { withContext } from "./clipboard.context";

let { ...rest }: ClipboardInputProps = $props();
const part = withContext(() => rest, { name: "Input" });
</script>

<ClipboardPrimitive.Input {...part.props} />
