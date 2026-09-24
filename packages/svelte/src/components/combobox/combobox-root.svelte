<script lang="ts">
import type { CollectionItem } from "@ark-ui/svelte/collection";
import type { ComboboxRootProps as ArkRootProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import { setComboboxRootContext } from "./combobox.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRootProps<CollectionItem>, "onValueChange"> & {
  onValueChange?: (value: string[]) => void;
  recipe?: typeof comboboxRecipe;
  variant?: FormControlVariant;
};

let {
  openOnClick = true,
  children,
  onValueChange,
  variant: _variant,
  recipe = comboboxRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setComboboxRootContext({
  get slots() {
    return slots;
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
