<script lang="ts">
import type { CollectionItem } from "@ark-ui/svelte/collection";
import {
  type SelectRootProps as ArkSelectRootProps,
  Select as SelectPrimitive,
} from "@ark-ui/svelte/select";
import type { SelectProps as BaseSelectProps } from "@pisagor/props";
import { selectRecipe } from "@pisagor/recipes";
import { Context } from "./select.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkSelectRootProps<CollectionItem>, "onValueChange"> & {
  onValueChange?: (value: string[]) => void;
  variant?: FormControlVariant;
} & BaseSelectProps;

let {
  onValueChange,
  variant: _variant,
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
