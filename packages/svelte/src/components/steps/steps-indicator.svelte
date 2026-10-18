<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsIndicatorProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { CheckIcon } from "phosphor-svelte";
  import { useStepsItem } from "./steps.context";

  let { class: className, children, ...rest }: StepsIndicatorProps = $props();
  const styles = useStepsItem();
  const slots = $derived(styles.slots);
</script>

<StepsPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
>
  <span class={slots.label()}>{@render children?.()}</span>
  <CheckIcon class={slots.check()} />
</StepsPrimitive.Indicator>
