<script lang="ts">
import {
  type RadioGroupRootProps as ArkRadioGroupRootProps,
  RadioGroup as RadioGroupPrimitive,
} from "@ark-ui/svelte/radio-group";
import type { RadioGroupProps as BaseRadioGroupProps } from "@pisagor/props";
import { radioGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<ArkRadioGroupRootProps, "onValueChange"> & {
  children?: import("svelte").Snippet;
  onValueChange?: (value: string | null) => void;
} & BaseRadioGroupProps;

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
