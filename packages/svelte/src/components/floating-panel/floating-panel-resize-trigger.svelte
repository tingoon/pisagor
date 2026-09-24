<script lang="ts">
import type { FloatingPanelResizeTriggerProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";

let props: FloatingPanelResizeTriggerProps = $props();
</script>

<FloatingPanelPrimitive.ResizeTrigger {...props} />
