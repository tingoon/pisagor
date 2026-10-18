<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemGroupProps as ArkProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./listbox.context";
  import ListboxItemGroupLabel from "./listbox-item-group-label.svelte";

  type Props = ArkProps & { heading?: string };

  let { children, heading, class: className, ...rest }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
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
