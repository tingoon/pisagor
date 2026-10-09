<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressValueTextProps,
} from "@ark-ui/svelte/progress";
import { withContext } from "./progress.context";

let { children, ...rest }: ProgressValueTextProps = $props();
const part = withContext(() => rest, { name: "Value" });
</script>

<ProgressPrimitive.ValueText {...part.props} {children} />
