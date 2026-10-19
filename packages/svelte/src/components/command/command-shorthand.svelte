<script lang="ts" module>
  import type { Component } from "svelte";

  export interface CommandShorthandItem {
    /** Optional group heading. */
    group?: string;
    icon?: Component;
    label: string;
    /** Keyboard shortcut hint. */
    shortcut?: string;
    /** Unique value. */
    value: string;
  }
</script>

<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import type {
    CommandRootContract,
    CommandContract,
  } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import { useLocale } from "../provider/context";
  import CommandContent from "./command-content.svelte";
  import CommandEmpty from "./command-empty.svelte";
  import CommandInput from "./command-input.svelte";
  import CommandItem from "./command-item.svelte";
  import CommandItemGroup from "./command-item-group.svelte";
  import CommandList from "./command-list.svelte";
  import CommandRoot from "./command-root.svelte";
  import CommandSeparator from "./command-separator.svelte";
  import CommandShortcut from "./command-shortcut.svelte";

  type Props = Omit<
    ComponentProps<typeof CommandRoot>,
    "collection" | "children"
  > & {
    emptyText?: string;
    items: CommandShorthandItem[];
    placeholder?: string;
  } & CommandRootContract &
    CommandContract;

  let { emptyText, items, placeholder, onInputValueChange, ...rest }: Props =
    $props();

  const { m } = useLocale();
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection<CommandShorthandItem>({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    groupBy: (item) => item.group ?? "",
    // svelte-ignore state_referenced_locally
    initialItems: items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });
  const groups = $derived(collection().group());
</script>

{#snippet itemList(groupItems: CommandShorthandItem[])}
  {#each groupItems as item (item.value)}
    <CommandItem {item}>
      {#if item.icon}
        <item.icon />
      {/if}
      {item.label}
      {#if item.shortcut}
        <CommandShortcut>{item.shortcut}</CommandShortcut>
      {/if}
    </CommandItem>
  {/each}
{/snippet}

<CommandRoot
  {...rest}
  {collection}
  onInputValueChange={(details) => {
    filter(details.inputValue);
    onInputValueChange?.(details);
  }}
>
  <CommandInput placeholder={m("command.placeholder", placeholder)} />
  <CommandContent>
    <CommandEmpty>{m("command.empty", emptyText)}</CommandEmpty>
    <CommandList>
      {#each groups as [group, groupItems], index (group)}
        {#if group}
          <CommandItemGroup heading={group}>
            {@render itemList(groupItems)}
            {#if index < groups.length - 1}
              <CommandSeparator />
            {/if}
          </CommandItemGroup>
        {:else}
          {@render itemList(groupItems)}
        {/if}
      {/each}
    </CommandList>
  </CommandContent>
</CommandRoot>
