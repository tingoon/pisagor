<script lang="ts">
import type { SwitchRootProps } from "@ark-ui/svelte/switch";
import { Switch as SwitchPrimitive } from "@ark-ui/svelte/switch";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes/switch";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setSwitchContext } from "./switch.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<SwitchRootProps, "class" | "children"> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
  class?: string | undefined;
  classNames?: Partial<Record<SwitchRecipeSlot, string>>;
  recipe?: typeof switchRecipe;
};

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
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
  onCheckedChange={onCheckedChange || onValueChange ? handleCheckedChange : undefined}
>
  <SwitchPrimitive.Control class={slots.control({ class: cn(classNames?.control) })}>
    <SwitchPrimitive.Thumb class={slots.thumb({ class: cn(classNames?.thumb) })} />
  </SwitchPrimitive.Control>
  <SwitchPrimitive.HiddenInput />
</SwitchPrimitive.Root>
