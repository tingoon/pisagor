<script lang="ts">
import {
  type StepsListProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

let { class: className, children, ...rest }: StepsListProps = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.List {...rest} class={slots.list({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.List>
