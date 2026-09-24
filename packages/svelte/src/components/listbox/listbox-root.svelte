<script lang="ts">
import type { CollectionItem } from "@ark-ui/svelte/collection";
import type { ListboxRootProps as ArkListboxRootProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { listboxRecipe } from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import { setListboxContext } from "./listbox.context";

type Props = Omit<ArkListboxRootProps<CollectionItem>, "class" | "onValueChange"> & {
  class?: string | undefined;
  onValueChange?: (value: string[]) => void;
  recipe?: typeof listboxRecipe;
};

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
  class={slots.base({ class: cn(className) })}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</ListboxPrimitive.Root>
