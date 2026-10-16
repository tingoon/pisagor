<script lang="ts">
  import {
    type CheckboxControlProps,
    Checkbox as CheckboxPrimitive,
  } from "@ark-ui/svelte/checkbox";
  import { checkboxRecipe, formControlToggleRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CheckIcon from "phosphor-svelte/lib/CheckIcon";
  import MinusIcon from "phosphor-svelte/lib/MinusIcon";
  import type { SizeScaleProps } from "../../internal/types";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import CheckboxIndicator from "./checkbox-indicator.svelte";

  type FormControlVariant = "primary" | "secondary";

  type Props = CheckboxControlProps &
    SizeScaleProps & {
      recipe?: typeof checkboxRecipe;
      /** Visual shell variant. Defaults to `primary`. */
      variant?: FormControlVariant;
    };

  let {
    children,
    size = "md",
    variant: variantProp,
    recipe = checkboxRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const surfaceVariant = useFormControlSurface();
  const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
  const slots = $derived(recipe());
</script>

<CheckboxPrimitive.Control
  {...rest}
  class={cn(
    formControlToggleRecipe({ size, surfaceVariant, variant }),
    slots.base(),
    slots.control({ class: cn(className) }),
  )}
  data-variant={variant}
>
  {#if children}
    {@render children()}
  {:else}
    <CheckboxIndicator {recipe}><CheckIcon /></CheckboxIndicator>
    <CheckboxIndicator indeterminate {recipe}><MinusIcon /></CheckboxIndicator>
  {/if}
</CheckboxPrimitive.Control>
