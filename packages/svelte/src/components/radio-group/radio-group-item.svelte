<script lang="ts">
import type { RadioGroupItemProps as ArkRadioGroupItemProps } from "@ark-ui/svelte/radio-group";
import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte/radio-group";
import { formControlRadioToggleRecipe } from "@pisagor/recipes/form-control";
import { radioGroupItemRecipe } from "@pisagor/recipes/radio-group";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRadioGroupItemProps, "class"> & {
  variant?: FormControlVariant;
  class?: string | undefined;
  recipe?: typeof radioGroupItemRecipe;
  tabindex?: number | null;
};

let {
  variant: variantProp,
  tabindex,
  children,
  recipe = radioGroupItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
</script>

<RadioGroupPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  <RadioGroupPrimitive.ItemControl
    class={cn(formControlRadioToggleRecipe({ surfaceVariant, variant }), slots.control())}
    data-variant={variant}
  />
  <RadioGroupPrimitive.ItemText> {@render children?.()} </RadioGroupPrimitive.ItemText>
  <RadioGroupPrimitive.ItemHiddenInput {tabindex} />
</RadioGroupPrimitive.Item>
