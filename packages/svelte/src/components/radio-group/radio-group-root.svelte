<script lang="ts">
import type { RadioGroupRootProps as ArkRadioGroupRootProps } from "@ark-ui/svelte/radio-group";
import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte/radio-group";
import { radioGroupRecipe } from "@pisagor/recipes/radio-group";
import { cn } from "@pisagor/utils";

type Props = Omit<ArkRadioGroupRootProps, "class" | "onValueChange"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  onValueChange?: (value: string | null) => void;
  recipe?: typeof radioGroupRecipe;
};

let {
  children,
  onValueChange,
  recipe = radioGroupRecipe,
  class: className,
  ...rest
}: Props = $props();

function handleValueChange(
  details: Parameters<NonNullable<ArkRadioGroupRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(details.value);
}
</script>

<RadioGroupPrimitive.Root
  {...rest}
  class={recipe({ class: cn(className) })}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</RadioGroupPrimitive.Root>
