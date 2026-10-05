<script lang="ts">
import {
  type StepsNextTriggerProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";

let { children, ...rest }: StepsNextTriggerProps = $props();
</script>

<StepsPrimitive.NextTrigger {...rest}>
  {@render children?.()}
</StepsPrimitive.NextTrigger>
