<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemTextProps,
  } from "@ark-ui/svelte";
  import { listboxItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useListboxItem } from "./listbox.context";

  let { class: className, children, ...rest }: ListboxItemTextProps = $props();
  const ctx = useListboxItem();
  const slots = $derived(ctx?.slots ?? listboxItemRecipe());
</script>

<ListboxPrimitive.ItemText
  {...rest}
  class={slots.text({ class: cn(className) })}
>
  {@render children?.()}
</ListboxPrimitive.ItemText>
