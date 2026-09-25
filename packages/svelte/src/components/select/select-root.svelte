<script lang="ts">
import type { CollectionItem } from "@ark-ui/svelte/collection";
import type { SelectRootProps as ArkSelectRootProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { setSelectRootContext } from "./select.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkSelectRootProps<CollectionItem>, "onValueChange"> & {
  onValueChange?: (value: string[]) => void;
  recipe?: typeof selectRecipe;
  variant?: FormControlVariant;
};

let {
  onValueChange,
  variant: _variant,
  recipe = selectRecipe,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setSelectRootContext({
  get slots() {
    return slots;
  },
});

function handleValueChange(details: { value: string[] }) {
  onValueChange?.(details.value);
}
</script>

<SelectPrimitive.Root {...rest} onValueChange={onValueChange ? handleValueChange : undefined}>
  {@render children?.()}
  <SelectPrimitive.HiddenSelect />
</SelectPrimitive.Root>
