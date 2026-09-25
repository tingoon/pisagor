<script lang="ts">
import type { StepsTriggerProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useStepsItem } from "./steps.context";

type Props = Omit<StepsTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Trigger {...rest} class={slots.trigger({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.Trigger>
