<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemProps as ArkListboxItemProps,
  } from "@ark-ui/svelte";
  import type {
    ListboxItemContract,
    ListboxItemRootContract,
  } from "@pisagor/contracts";
  import { withListboxItemProvider } from "./listbox.context";

  type Props = ArkListboxItemProps &
    ListboxItemRootContract &
    ListboxItemContract;

  let { children, ...rest }: Props = $props();
  const item = withListboxItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<ListboxPrimitive.Item {...item.props}>
  {@render children?.()}
</ListboxPrimitive.Item>
