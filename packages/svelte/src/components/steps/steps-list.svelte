<script lang="ts">
import {
  type StepsListProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { withStepsContext } from "./steps.context";

let { children, ...rest }: StepsListProps = $props();
const part = withStepsContext(() => rest, { name: "List" });
</script>

<StepsPrimitive.List {...part.props}>
  {@render children?.()}
</StepsPrimitive.List>
