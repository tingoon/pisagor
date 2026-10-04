<script lang="ts">
import type { CheckboxGroupProps as ArkCheckboxGroupProps } from "@ark-ui/svelte/checkbox";
import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte/checkbox";
import type { CheckboxGroupProps as BaseCheckboxGroupProps } from "@pisagor/props";
import { checkboxGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<ArkCheckboxGroupProps, "class" | "onValueChange"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  onValueChange?: (value: string[]) => void;
  } & BaseCheckboxGroupProps;

let {
  onValueChange,
  recipe = checkboxGroupRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<CheckboxPrimitive.Group {...rest} class={recipe({ class: cn(className) })} {onValueChange}>
  {@render children?.()}
</CheckboxPrimitive.Group>
