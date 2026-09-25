<script lang="ts">
import type { StepsPrevTriggerProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";

type Props = StepsPrevTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<StepsPrimitive.PrevTrigger {...rest}> {@render children?.()} </StepsPrimitive.PrevTrigger>
