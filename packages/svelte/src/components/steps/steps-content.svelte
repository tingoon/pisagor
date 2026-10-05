<script lang="ts">
import {
  type StepsContentProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

let { class: className, children, ...rest }: StepsContentProps = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.Content
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  {@render children?.()}
</StepsPrimitive.Content>
