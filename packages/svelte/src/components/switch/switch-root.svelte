<script lang="ts">
import {
  Switch as SwitchPrimitive,
  type SwitchRootProps,
} from "@ark-ui/svelte/switch";
import type { SwitchProps as BaseSwitchProps } from "@pisagor/props";
import { switchRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { Context } from "./switch.context";

type FormControlVariant = "primary" | "secondary";

type Props = SwitchRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseSwitchProps;

let {
  variant: variantProp,
  children,
  recipe = switchRecipe,
  class: className,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe({ surfaceVariant, variant }));

Context.set({
  get slots() {
    return slots;
  },
  get variants() {
    return { surfaceVariant, variant };
  },
});
</script>

<SwitchPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
>
  {@render children?.()}
</SwitchPrimitive.Root>
