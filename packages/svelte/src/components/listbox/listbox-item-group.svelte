<script lang="ts">
import {
  type ListboxItemGroupProps as ArkProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";
import ListboxItemGroupLabel from "./listbox-item-group-label.svelte";

type Props = ArkProps & { heading?: string };

let { children, heading, class: className, ...rest }: Props = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.ItemGroup
  {...rest}
  class={slots.itemGroup({ class: cn(className) })}
>
  {#if heading}
    <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>
  {/if}
  {@render children?.()}
</ListboxPrimitive.ItemGroup>
