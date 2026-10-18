<script lang="ts">
  import { createListCollection } from "@ark-ui/svelte";
  import type {
    SelectPresetItem,
    SelectRootContract,
    SelectContract,
  } from "@pisagor/props";
  import type { ComponentProps } from "svelte";
  import SelectContent from "./select-content.svelte";
  import SelectItem from "./select-item.svelte";
  import SelectRoot from "./select-root.svelte";
  import SelectTrigger from "./select-trigger.svelte";
  import SelectValueText from "./select-value-text.svelte";

  type PresetItem = Omit<SelectPresetItem, "label"> & { label: string };

  type Props = Omit<
    ComponentProps<typeof SelectRoot>,
    "children" | "collection" | "items" | "placeholder"
  > &
    Omit<SelectRootContract, "items" | "placeholder"> & {
      clearable?: boolean;
      items?: Array<PresetItem | string>;
      placeholder?: string;
    } & Omit<SelectContract, "items" | "placeholder">;

  let { clearable = false, items = [], placeholder, ...rest }: Props = $props();

  const normalized = $derived(
    items.map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
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
