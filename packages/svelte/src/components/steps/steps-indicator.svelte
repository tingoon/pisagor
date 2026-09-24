<script lang="ts">
import type { StepsIndicatorProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import { useStepsItem } from "./steps.context";

type Props = Omit<StepsIndicatorProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Indicator {...rest} class={slots.indicator({ class: cn(className) })}>
  <span class={slots.label()}>{@render children?.()}</span>
  <CheckIcon class={slots.check()} />
</StepsPrimitive.Indicator>
