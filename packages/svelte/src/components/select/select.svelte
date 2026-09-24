<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import type { ComponentProps } from "svelte";
import SelectContent from "./select-content.svelte";
import SelectItem from "./select-item.svelte";
import SelectRoot from "./select-root.svelte";
import SelectTrigger from "./select-trigger.svelte";
import SelectValueText from "./select-value-text.svelte";

type PresetItem = { label: string; value: string };

type Props = Omit<ComponentProps<typeof SelectRoot>, "children" | "collection"> & {
  clearable?: boolean;
  items?: Array<PresetItem | string>;
  placeholder?: string;
};

let { clearable = false, items = [], placeholder, ...rest }: Props = $props();

const normalized = $derived(
  items.map((item) => (typeof item === "string" ? { label: item, value: item } : item)),
);
const collection = $derived(createListCollection({ items: normalized }));
</script>

<SelectRoot {...rest} {collection}>
  <SelectTrigger {clearable}>
    <SelectValueText {placeholder} />
  </SelectTrigger>
  <SelectContent>
    {#each normalized as item (item.value)}
      <SelectItem {item}>{item.label}</SelectItem>
    {/each}
  </SelectContent>
</SelectRoot>
