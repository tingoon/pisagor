<script lang="ts">
import type { StepsItemProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { stepsItemRecipe } from "@pisagor/recipes/steps";
import { cn } from "@pisagor/utils";
import { setStepsItemContext } from "./steps.context";

type Props = Omit<StepsItemProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof stepsItemRecipe;
};

let { itemRecipe = stepsItemRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(itemRecipe());

setStepsItemContext({
  get slots() {
    return slots;
  },
});
</script>

<StepsPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.Item>
