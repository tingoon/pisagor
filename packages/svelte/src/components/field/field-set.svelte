<script lang="ts">
import type { FieldsetRootProps } from "@ark-ui/svelte/fieldset";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/svelte/fieldset";
import { fieldRecipe } from "@pisagor/recipes/field";
import { cn } from "@pisagor/utils";
import { setFieldContext } from "./field.context";

type Props = Omit<FieldsetRootProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof fieldRecipe;
};

let { recipe = fieldRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());
setFieldContext({
  get slots() {
    return slots;
  },
});
</script>

<FieldsetPrimitive.Root {...rest} class={slots.set({ class: cn(className) })}>
  {@render children?.()}
</FieldsetPrimitive.Root>
