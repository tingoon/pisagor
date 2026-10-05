<script lang="ts">
import type { SwitchRootProps } from "@ark-ui/svelte/switch";
import { Switch as SwitchPrimitive } from "@ark-ui/svelte/switch";
import type { SwitchProps as BaseSwitchProps } from "@pisagor/props";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setSwitchContext } from "./switch.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<SwitchRootProps, "class" | "children"> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
  class?: string | undefined;
  classNames?: Partial<Record<SwitchRecipeSlot, string>>;
} & BaseSwitchProps;

let {
  variant: variantProp,
  onCheckedChange,
  onValueChange,
  class: className,
  classNames,
  recipe = switchRecipe,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe({ surfaceVariant, variant }));

setSwitchContext({
  get slots() {
    return slots;
  },
});

function handleCheckedChange(
  details: Parameters<NonNullable<SwitchRootProps["onCheckedChange"]>>[0],
) {
  onCheckedChange?.(details);
  onValueChange?.(details.checked === true);
}
</script>

<SwitchPrimitive.Root
  {...rest}
  class={slots.base({ class: className })}
  data-variant={variant}
  onCheckedChange={onCheckedChange || onValueChange
    ? handleCheckedChange
    : undefined}
>
  <SwitchPrimitive.Control
    class={slots.control({ class: classNames?.control })}
  >
    <SwitchPrimitive.Thumb class={slots.thumb({ class: classNames?.thumb })} />
  </SwitchPrimitive.Control>
  <SwitchPrimitive.HiddenInput />
</SwitchPrimitive.Root>
