<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxGroupProps as ArkCheckboxGroupProps,
  } from "@ark-ui/svelte";
  import type { CheckboxGroupRootContract } from "@pisagor/contracts";
  import { checkboxGroupRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = Omit<ArkCheckboxGroupProps, "onValueChange"> & {
    children?: import("svelte").Snippet;
    onValueChange?: (value: string[]) => void;
  } & CheckboxGroupRootContract;

  let {
    onValueChange,
    recipe = checkboxGroupRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<CheckboxPrimitive.Group
  {...rest}
  class={recipe({ class: cn(className) })}
  {onValueChange}
>
  {@render children?.()}
</CheckboxPrimitive.Group>
