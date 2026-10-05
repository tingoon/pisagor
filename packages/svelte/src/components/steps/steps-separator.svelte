<script lang="ts">
import {
  Steps as StepsPrimitive,
  type StepsSeparatorProps,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useStepsItem } from "./steps.context";

let { class: className, ...rest }: StepsSeparatorProps = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
/>
