<script lang="ts">
import type { StepsListProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

type Props = Omit<StepsListProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.List {...rest} class={slots.list({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.List>
