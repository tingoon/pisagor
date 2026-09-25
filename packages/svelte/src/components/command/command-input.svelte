<script lang="ts">
import type { ComboboxInputProps } from "@ark-ui/svelte/combobox";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import { onMount } from "svelte";
import ComboboxControl from "../combobox/combobox-control.svelte";
import ComboboxFieldInput from "../combobox/combobox-field-input.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useCommand } from "./command.context";

type Props = Omit<ComboboxInputProps, "class" | "size"> &
  Pick<FormControlGroupShellVariantProps, "size"> & {
    class?: string | undefined;
  };

let { size = "md", class: className, ...rest }: Props = $props();
const { slots } = useCommand();
const surfaceVariant = useFormControlSurface();

let shellEl = $state<HTMLDivElement | null>(null);

onMount(() => {
  shellEl?.querySelector("input")?.focus();
});
</script>

<ComboboxControl class={slots.control()}>
  <div
    class={cn(
  formControlGroupShellRecipe({ size, surfaceVariant, variant: "primary" }),
  slots.input({ class: cn(className) }),
)}
    data-part="root"
    data-scope="input-group"
    bind:this={shellEl}
  >
    <div class="ps-2" data-align="inline-start">
      <MagnifyingGlassIcon aria-hidden="true" class={slots.inputIcon()} />
    </div>
    <ComboboxFieldInput {...rest} class={inputGroupControlRecipe()} />
  </div>
</ComboboxControl>
