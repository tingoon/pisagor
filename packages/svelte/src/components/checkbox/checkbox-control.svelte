<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxControlProps,
  } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/props";
  import { checkboxRecipe, formControlToggleRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";

  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import CheckboxIndicator from "./checkbox-indicator.svelte";

  type FormControlVariant = "primary" | "secondary";

  type Props = CheckboxControlProps &
    CheckboxRootContract & {
      recipe?: typeof checkboxRecipe;
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
