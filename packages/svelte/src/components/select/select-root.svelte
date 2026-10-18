<script lang="ts">
  import {
    type CollectionItem,
    Select as SelectPrimitive,
    type SelectRootProps as ArkSelectRootProps,
  } from "@ark-ui/svelte";
  import type { SelectRootContract } from "@pisagor/props";
  import {
    type FormControlShellVariantProps,
    selectRecipe,
  } from "@pisagor/recipes";
  import { Context, setSelectControlContext } from "./select.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<ArkSelectRootProps<CollectionItem>, "onValueChange"> & {
    onValueChange?: (value: string[]) => void;
    /** Visual shell variant applied to the trigger. Defaults to `primary`. */
    variant?: FormControlVariant;
    /** Trigger size. Defaults to `md`. */
    size?: FormControlShellVariantProps["size"];
  } & Omit<SelectRootContract, "items">;

  let {
    onValueChange,
    variant,
    size,
    recipe = selectRecipe,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());

  Context.set({
    get slots() {
      return slots;
    },
  });
  setSelectControlContext({
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

<SelectPrimitive.Root
  {...rest}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
  <SelectPrimitive.HiddenSelect />
</SelectPrimitive.Root>
