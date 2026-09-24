<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import type { ComponentProps } from "svelte";
import ListboxContent from "./listbox-content.svelte";
import ListboxItem from "./listbox-item.svelte";
import ListboxItemText from "./listbox-item-text.svelte";
import ListboxRoot from "./listbox-root.svelte";

type PresetItem = { disabled?: boolean; label: string; value: string };

type Props = Omit<ComponentProps<typeof ListboxRoot>, "children" | "collection"> & {
  collection?: ComponentProps<typeof ListboxRoot>["collection"];
  items?: PresetItem[];
};

let { collection: collectionProp, items = [], ...rest }: Props = $props();

const collection = $derived(
  collectionProp ??
    createListCollection({
      items,
      itemToString: (item) => item.value,
      itemToValue: (item) => item.value,
    }),
);
</script>

<ListboxRoot {...rest} {collection}>
  {#if items.length > 0}
    <ListboxContent>
      {#each items as item (item.value)}
        <ListboxItem {item}>
          <ListboxItemText>{item.label}</ListboxItemText>
        </ListboxItem>
      {/each}
    </ListboxContent>
  {/if}
</ListboxRoot>
