<script lang="ts">
import {
  type StepsIndicatorProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import { useStepsItem } from "./steps.context";

let { class: className, children, ...rest }: StepsIndicatorProps = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
>
  <span class={slots.label()}>{@render children?.()}</span>
  <CheckIcon class={slots.check()} />
</StepsPrimitive.Indicator>
