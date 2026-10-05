<script lang="ts">
import type { CollectionItem } from "@ark-ui/svelte/collection";
import type { ListboxRootProps as ArkListboxRootProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import type { ListboxProps as BaseListboxProps } from "@pisagor/props";
import { listboxRecipe } from "@pisagor/recipes";
import { setListboxContext } from "./listbox.context";

type Props = Omit<
  ArkListboxRootProps<CollectionItem>,
  "class" | "onValueChange"
> & {
  class?: string | undefined;
  onValueChange?: (value: string[]) => void;
} & BaseListboxProps;

let {
  recipe = listboxRecipe,
  class: className,
  children,
  onValueChange,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setListboxContext({
  get slots() {
    return slots;
  },
});

function handleValueChange(details: { value: string[] }) {
  onValueChange?.(details.value);
}
</script>

<ListboxPrimitive.Root
  {...rest}
  class={slots.base({ class: className })}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</ListboxPrimitive.Root>
