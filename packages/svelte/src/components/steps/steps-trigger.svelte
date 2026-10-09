<script lang="ts">
import {
  Steps as StepsPrimitive,
  type StepsTriggerProps,
} from "@ark-ui/svelte/steps";
import { withStepsItemContext } from "./steps.context";

let { children, ...rest }: StepsTriggerProps = $props();
const part = withStepsItemContext(() => rest, { name: "Trigger" });
</script>

<StepsPrimitive.Trigger {...part.props}>
  {@render children?.()}
</StepsPrimitive.Trigger>
