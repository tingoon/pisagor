<script lang="ts">
import type { ComboboxInputProps as ArkInputProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive, useComboboxContext } from "@ark-ui/svelte/combobox";
import { buttonRecipe } from "@pisagor/recipes/button";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useComboboxRoot } from "./combobox.context";
import ComboboxClearTrigger from "./combobox-clear-trigger.svelte";
import ComboboxControl from "./combobox-control.svelte";
import ComboboxTrigger from "./combobox-trigger.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkInputProps, "class" | "size"> &
  FormControlGroupShellVariantProps & {
    class?: string | undefined;
    clearable?: boolean;
    showTrigger?: boolean;
  };

let {
  size = "md",
  variant: variantProp,
  clearable = false,
  showTrigger = true,
  children,
  class: className,
  ...rest
}: Props = $props();

const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
const api = useComboboxContext();
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<ComboboxControl data-size={size}>
  <div
    class={cn(formControlGroupShellRecipe({ size, surfaceVariant, variant }), "group/input-group", className)}
    data-part="root"
    data-scope="input-group"
  >
    {@render children?.()}
    <ComboboxPrimitive.Input {...rest} class={inputGroupControlRecipe()} />
    <div class="ms-auto flex items-center gap-0.5 pe-1" data-align="inline-end">
      {#if showTrigger}
        <ComboboxTrigger class={slots.triggerHidden()} />
      {/if}
      {#if clearable && api().inputValue}
        <ComboboxClearTrigger
          aria-label="Clear"
          class={cn(buttonRecipe({ size: "icon-xs", variant: "ghost" }).base())}
          type="button"
        >
          <XIcon aria-hidden="true" />
        </ComboboxClearTrigger>
      {/if}
    </div>
  </div>
</ComboboxControl>
