<script lang="ts">
  import {
    type CollectionItem,
    Listbox as ListboxPrimitive,
    type ListboxRootProps as ArkListboxRootProps,
  } from "@ark-ui/svelte";
  import type { ListboxRootContract } from "@pisagor/contracts";
  import { listboxRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./listbox.context";

  type Props = Omit<ArkListboxRootProps<CollectionItem>, "onValueChange"> & {
    onValueChange?: (value: string[]) => void;
  } & Omit<ListboxRootContract, "emptyText" | "items">;

  let {
    recipe = listboxRecipe,
    class: className,
    children,
    onValueChange,
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

<ListboxPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</ListboxPrimitive.Root>
