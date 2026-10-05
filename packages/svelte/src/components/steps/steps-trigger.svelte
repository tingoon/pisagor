<script lang="ts">
import {
  Steps as StepsPrimitive,
  type StepsTriggerProps,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useStepsItem } from "./steps.context";

let { class: className, children, ...rest }: StepsTriggerProps = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Trigger
  {...rest}
  class={slots.trigger({ class: cn(className) })}
>
  {@render children?.()}
</StepsPrimitive.Trigger>
