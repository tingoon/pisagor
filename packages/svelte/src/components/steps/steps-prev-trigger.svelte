<script lang="ts">
import {
  type StepsPrevTriggerProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";

let { children, ...rest }: StepsPrevTriggerProps = $props();
</script>

<StepsPrimitive.PrevTrigger {...rest}>
  {@render children?.()}
</StepsPrimitive.PrevTrigger>
