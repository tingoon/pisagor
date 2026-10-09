<script lang="ts">
import {
  Splitter as SplitterPrimitive,
  type SplitterResizeTriggerIndicatorProps,
} from "@ark-ui/svelte/splitter";
import { withContext } from "./resizable.context";

let { ...rest }: SplitterResizeTriggerIndicatorProps = $props();
const part = withContext(() => rest, {
  defaultProps: { "data-part": "resize-trigger-indicator" },
  name: "ResizeTriggerIndicator",
  slot: "resizeTriggerIndicator",
});
</script>

<SplitterPrimitive.ResizeTriggerIndicator {...part.props} />
