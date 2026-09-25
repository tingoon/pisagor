<script lang="ts">
import type { CheckboxRootProps } from "@ark-ui/svelte/checkbox";
import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte/checkbox";
import { checkboxRecipe } from "@pisagor/recipes/checkbox";
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<CheckboxRootProps, "class"> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
  class?: string | undefined;
  recipe?: typeof checkboxRecipe;
  /** Forwarded to the hidden input (Svelte DOM attr). */
  tabindex?: number | null;
};

let {
  variant: variantProp,
  tabindex,
  onCheckedChange,
  onValueChange,
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
  formControlToggleRecipe({ size: "md", surfaceVariant, variant }),
  slots.base({ class: cn(className) }),
)}
  data-variant={variant}
  onCheckedChange={onCheckedChange || onValueChange ? handleCheckedChange : undefined}
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
