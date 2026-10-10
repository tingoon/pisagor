<script lang="ts">
import {
  type StepsContentProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { withStepsContext } from "./steps.context";

let { children, ...rest }: StepsContentProps = $props();
const part = withStepsContext(() => rest, { name: "Content" });
</script>

<StepsPrimitive.Content {...part.props}>
  {@render children?.()}
</StepsPrimitive.Content>
