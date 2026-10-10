<script lang="ts">
import {
  type SelectTriggerProps as ArkSelectTriggerProps,
  Select as SelectPrimitive,
} from "@ark-ui/svelte/select";
import {
  type FormControlShellVariantProps,
  formControlShellRecipe,
  selectRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretUpDownIcon from "phosphor-svelte/lib/CaretUpDownIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useSelectControl, useSelectRoot } from "./select.context";
import SelectClearTrigger from "./select-clear-trigger.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkSelectTriggerProps, "size"> &
  FormControlShellVariantProps & { clearable?: boolean };

let {
  size: sizeProp,
  variant: variantProp,
  clearable = false,
  children,
  class: className,
  ...rest
}: Props = $props();

const ctx = useSelectRoot();
const control = useSelectControl();
const size = $derived(sizeProp ?? control.size ?? "md");
const slots = $derived(ctx?.slots ?? selectRecipe());
const surfaceVariant = useFormControlSurface();
const resolvedVariant = $derived(
  variantProp ?? control.variant ?? ("primary" as FormControlVariant),
);
</script>

<SelectPrimitive.Control>
  <SelectPrimitive.Trigger
    {...rest}
    class={cn(
      formControlShellRecipe({
        size,
        surfaceVariant,
        variant: resolvedVariant,
      }),
      slots.trigger(),
      className,
    )}
    data-variant={resolvedVariant}
  >
    {@render children?.()}
    <div class={slots.triggerActions()}>
      {#if clearable}
        <SelectClearTrigger>
          <XIcon />
        </SelectClearTrigger>
      {/if}
      <SelectPrimitive.Indicator>
        <CaretUpDownIcon />
      </SelectPrimitive.Indicator>
    </div>
  </SelectPrimitive.Trigger>
</SelectPrimitive.Control>
