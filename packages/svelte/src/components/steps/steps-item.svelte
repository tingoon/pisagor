<script lang="ts">
import type { StepsItemProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import type { StepsItemProps as BaseStepsItemProps } from "@pisagor/props";
import { stepsItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setStepsItemContext } from "./steps.context";

type Props = Omit<StepsItemProps, "class"> &
  {
  class?: string | undefined;
  } & BaseStepsItemProps;

let { recipe = stepsItemRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setStepsItemContext({
  get slots() {
    return slots;
  },
});
</script>

<StepsPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.Item>
