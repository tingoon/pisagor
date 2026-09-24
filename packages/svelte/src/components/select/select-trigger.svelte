<script lang="ts">
import type { SelectTriggerProps as ArkSelectTriggerProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import {
  type FormControlShellVariantProps,
  formControlShellRecipe,
} from "@pisagor/recipes/form-control";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import CaretUpDownIcon from "phosphor-svelte/lib/CaretUpDownIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useSelectRoot } from "./select.context";
import SelectClearTrigger from "./select-clear-trigger.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkSelectTriggerProps, "class" | "size"> &
  FormControlShellVariantProps & {
    class?: string | undefined;
    clearable?: boolean;
  };

let {
  size = "md",
  variant: variantProp,
  clearable = false,
  children,
  class: className,
  ...rest
}: Props = $props();

const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
const surfaceVariant = useFormControlSurface();
const resolvedVariant = $derived(variantProp ?? ("primary" as FormControlVariant));
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
