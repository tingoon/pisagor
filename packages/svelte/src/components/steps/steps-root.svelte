<script lang="ts">
import type { StepsRootProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import type { StepsProps as BaseStepsProps } from "@pisagor/props";
import { stepsRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setStepsContext } from "./steps.context";

type Props = Omit<StepsRootProps, "class"> &
  {
  class?: string | undefined;
  } & BaseStepsProps;

let { recipe = stepsRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setStepsContext({
  get slots() {
    return slots;
  },
});
</script>

<StepsPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.Root>
