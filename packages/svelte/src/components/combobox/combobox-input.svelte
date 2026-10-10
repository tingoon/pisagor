<script lang="ts">
import type { ComboboxInputProps as ArkInputProps } from "@ark-ui/svelte/combobox";
import {
  Combobox as ComboboxPrimitive,
  useComboboxContext,
} from "@ark-ui/svelte/combobox";
import {
  buttonRecipe,
  comboboxRecipe,
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
  inputGroupControlRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useComboboxControl, useComboboxRoot } from "./combobox.context";
import ComboboxClearTrigger from "./combobox-clear-trigger.svelte";
import ComboboxControl from "./combobox-control.svelte";
import ComboboxTrigger from "./combobox-trigger.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkInputProps, "size"> &
  FormControlGroupShellVariantProps & {
    clearable?: boolean;
    showTrigger?: boolean;
  };

let {
  size: sizeProp,
  variant: variantProp,
  clearable = false,
  showTrigger = true,
  children,
  class: className,
  ...rest
}: Props = $props();

const ctx = useComboboxRoot();
const control = useComboboxControl();
const size = $derived(sizeProp ?? control.size ?? "md");
const slots = $derived(ctx?.slots ?? comboboxRecipe());
const api = useComboboxContext();
const surfaceVariant = useFormControlSurface();
const variant = $derived(
  variantProp ?? control.variant ?? ("primary" as FormControlVariant),
);
</script>

<ComboboxControl data-size={size}>
  <div
    class={cn(
      formControlGroupShellRecipe({ size, surfaceVariant, variant }),
      "group/input-group",
      className,
    )}
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
          class={buttonRecipe({ size: "icon-xs", variant: "ghost" }).base()}
          type="button"
        >
          <XIcon aria-hidden="true" />
        </ComboboxClearTrigger>
      {/if}
    </div>
  </div>
</ComboboxControl>
