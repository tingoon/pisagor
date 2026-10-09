<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressTrackProps,
} from "@ark-ui/svelte/progress";
import { withContext } from "./progress.context";

let { children, ...rest }: ProgressTrackProps = $props();
const part = withContext(() => rest, { name: "Track" });
</script>

<ProgressPrimitive.Track {...part.props}>
  {@render children?.()}
</ProgressPrimitive.Track>
