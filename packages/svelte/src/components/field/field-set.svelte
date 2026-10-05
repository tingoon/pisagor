<script lang="ts">
import {
  Fieldset as FieldsetPrimitive,
  type FieldsetRootProps,
} from "@ark-ui/svelte/fieldset";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { fieldRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setFieldContext } from "./field.context";

type Props = FieldsetRootProps & BaseFieldProps;

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

<FieldsetPrimitive.Root {...rest} class={slots.set({ class: cn(className) })}>
  {@render children?.()}
</FieldsetPrimitive.Root>
