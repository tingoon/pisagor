<script lang="ts">
import type { FieldsetRootProps } from "@ark-ui/svelte/fieldset";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/svelte/fieldset";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { fieldRecipe } from "@pisagor/recipes";
import { setFieldContext } from "./field.context";

type Props = Omit<FieldsetRootProps, "class"> & {
  class?: string | undefined;
} & BaseFieldProps;

let {
  recipe = fieldRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setFieldContext({
  get slots() {
    return slots;
  },
});
</script>

<FieldsetPrimitive.Root {...rest} class={slots.set({ class: className })}>
  {@render children?.()}
</FieldsetPrimitive.Root>
