<script lang="ts">
  import {
    type CollectionItem,
    Combobox as ComboboxPrimitive,
    type ComboboxRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { ComboboxRootContract } from "@pisagor/contracts";
  import {
    comboboxRecipe,
    type FormControlGroupShellVariantProps,
  } from "@pisagor/recipes";
  import { Context, setComboboxControlContext } from "./combobox.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<ArkRootProps<CollectionItem>, "onValueChange"> & {
    onValueChange?: (value: string[]) => void;
    /** Visual shell variant applied to the input. Defaults to `primary`. */
    variant?: FormControlVariant;
    /** Input size. Defaults to `md`. */
    size?: FormControlGroupShellVariantProps["size"];
  } & Omit<ComboboxRootContract, "items">;

  let {
    openOnClick = true,
    children,
    onValueChange,
    variant,
    size,
    recipe = comboboxRecipe,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
  setComboboxControlContext({
    get size() {
      return size;
    },
    get variant() {
      return variant;
    },
  });

  function handleValueChange(details: { value: string[] }) {
    onValueChange?.(details.value);
  }
</script>

<ComboboxPrimitive.Root
  {...rest}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {openOnClick}
>
  {@render children?.()}
</ComboboxPrimitive.Root>
