<script lang="ts">
import {
  type StepsCompletedContentProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

let {
  class: className,
  children,
  ...rest
}: StepsCompletedContentProps = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.CompletedContent
  {...rest}
  class={slots.completedContent({ class: cn(className) })}
>
  {@render children?.()}
</StepsPrimitive.CompletedContent>
