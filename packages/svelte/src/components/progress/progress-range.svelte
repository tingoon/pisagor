<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressRangeProps,
} from "@ark-ui/svelte/progress";
import { withContext } from "./progress.context";

let { children, ...rest }: ProgressRangeProps = $props();
const part = withContext(() => rest, { name: "Range" });
</script>

<ProgressPrimitive.Range {...part.props}>
  {@render children?.()}
</ProgressPrimitive.Range>
