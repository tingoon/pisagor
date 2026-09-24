<script lang="ts">
import type { StepsNextTriggerProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";

type Props = StepsNextTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<StepsPrimitive.NextTrigger {...rest}> {@render children?.()} </StepsPrimitive.NextTrigger>
