<script lang="ts">
  import {
    Fieldset as FieldsetPrimitive,
    type FieldsetRootProps,
  } from "@ark-ui/svelte";
  import type { FieldRootContract } from "@pisagor/contracts";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./field.context";

  type Props = FieldsetRootProps & FieldRootContract;

  let {
    recipe = fieldRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<FieldsetPrimitive.Root {...rest} class={slots.set({ class: cn(className) })}>
  {@render children?.()}
</FieldsetPrimitive.Root>
