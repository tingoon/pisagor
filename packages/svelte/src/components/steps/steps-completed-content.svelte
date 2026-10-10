<script lang="ts">
import {
  type StepsCompletedContentProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { withStepsContext } from "./steps.context";

let { children, ...rest }: StepsCompletedContentProps = $props();
const part = withStepsContext(() => rest, {
  defaultProps: { "data-part": "completed-content" },
  name: "CompletedContent",
  slot: "completedContent",
});
</script>

<StepsPrimitive.CompletedContent {...part.props}>
  {@render children?.()}
</StepsPrimitive.CompletedContent>
