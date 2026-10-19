<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxRootProps,
  } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/contracts";
  import { checkboxRecipe, formControlToggleRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";

  import { useFormControlSurface } from "../surface/use-form-control-surface";

  type FormControlVariant = "primary" | "secondary";

  type Props = CheckboxRootProps &
    CheckboxRootContract & {
      onValueChange?: (value: boolean) => void;
      /** Forwarded to the hidden input (Svelte DOM attr). */
      tabindex?: number | null;
    };

  let {
    variant: variantProp,
    tabindex,
    onCheckedChange,
    onValueChange,
    size = "md",
    recipe = checkboxRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const surfaceVariant = useFormControlSurface();
  const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
  const slots = $derived(recipe());

  function handleCheckedChange(
    details: Parameters<NonNullable<CheckboxRootProps["onCheckedChange"]>>[0],
  ) {
    onCheckedChange?.(details);
    onValueChange?.(details.checked === true);
  }
</script>

<CheckboxPrimitive.Root
  {...rest}
  class={cn(
    formControlToggleRecipe({ size, surfaceVariant, variant }),
    slots.base({ class: cn(className) }),
  )}
  data-variant={variant}
  onCheckedChange={onCheckedChange || onValueChange
    ? handleCheckedChange
    : undefined}
>
  <CheckboxPrimitive.Control>
    <CheckboxPrimitive.Indicator class={slots.indicator()}>
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
    <CheckboxPrimitive.Indicator class={slots.indicator()} indeterminate>
      <MinusIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Control>
  <CheckboxPrimitive.HiddenInput {tabindex} />
</CheckboxPrimitive.Root>
