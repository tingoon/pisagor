<script lang="ts">
import type { RadioGroupRootProps as ArkRadioGroupRootProps } from "@ark-ui/svelte/radio-group";
import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte/radio-group";
import type { RadioGroupProps as BaseRadioGroupProps } from "@pisagor/props";
import { radioGroupRecipe } from "@pisagor/recipes";

type Props = Omit<ArkRadioGroupRootProps, "class" | "onValueChange"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
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
  class={recipe({ class: className })}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</RadioGroupPrimitive.Root>
