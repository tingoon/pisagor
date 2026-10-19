<script lang="ts">
  import { createListCollection } from "@ark-ui/svelte";
  import type {
    ListboxPresetItem,
    ListboxRootContract,
    ListboxContract,
  } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import ListboxContent from "./listbox-content.svelte";
  import ListboxEmpty from "./listbox-empty.svelte";
  import ListboxItem from "./listbox-item.svelte";
  import ListboxItemText from "./listbox-item-text.svelte";
  import ListboxRoot from "./listbox-root.svelte";

  type PresetItem = Omit<ListboxPresetItem, "label"> & { label: string };

  type Props = Omit<
    ComponentProps<typeof ListboxRoot>,
    "children" | "collection"
  > & {
    collection?: ComponentProps<typeof ListboxRoot>["collection"];
    emptyText?: string;
    items?: PresetItem[];
  } & ListboxRootContract &
    ListboxContract;

  let {
    collection: collectionProp,
    emptyText,
    items = [],
    ...rest
  }: Props = $props();

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
  <ListboxContent>
    {#if emptyText}
      <ListboxEmpty>{emptyText}</ListboxEmpty>
    {:else}
      <ListboxEmpty />
    {/if}
    {#each items as item (item.value)}
      <ListboxItem {item}>
        <ListboxItemText>{item.label}</ListboxItemText>
      </ListboxItem>
    {/each}
  </ListboxContent>
</ListboxRoot>
