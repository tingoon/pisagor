<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import type { ComponentProps } from "svelte";
import ComboboxContent from "./combobox-content.svelte";
import ComboboxInput from "./combobox-input.svelte";
import ComboboxItem from "./combobox-item.svelte";
import ComboboxList from "./combobox-list.svelte";
import ComboboxRoot from "./combobox-root.svelte";

type PresetItem = { label: string; value: string };

type Props = Omit<ComponentProps<typeof ComboboxRoot>, "children" | "collection"> & {
  clearable?: boolean;
  id?: string;
  items?: Array<PresetItem | string>;
};

let { clearable = false, items = [], id, ...rest }: Props = $props();

const normalized = $derived(
  items.map((item) => (typeof item === "string" ? { label: item, value: item } : item)),
);
const collection = $derived(createListCollection({ items: normalized }));
</script>

<ComboboxRoot {...rest} {collection}>
  <ComboboxInput {clearable} {id} />
  <ComboboxContent>
    <ComboboxList>
      {#each normalized as item (item.value)}
        <ComboboxItem {item}>{item.label}</ComboboxItem>
      {/each}
    </ComboboxList>
  </ComboboxContent>
</ComboboxRoot>
