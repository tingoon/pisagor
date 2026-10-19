<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import type { CommandContract } from "@pisagor/contracts";
  import { MagnifyingGlassIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import ComboboxInput from "../combobox/combobox-input.svelte";
  import ComboboxItem from "../combobox/combobox-item.svelte";
  import ComboboxItemGroup from "../combobox/combobox-item-group.svelte";
  import ComboboxItemGroupLabel from "../combobox/combobox-item-group-label.svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import CommandContent from "./command-content.svelte";
  import CommandControl from "./command-control.svelte";
  import CommandEmpty from "./command-empty.svelte";
  import CommandFooter from "./command-footer.svelte";
  import CommandList from "./command-list.svelte";
  import CommandListWrapper from "./command-list-wrapper.svelte";
  import CommandRoot from "./command-root.svelte";
  import CommandSeparator from "./command-separator.svelte";
  import CommandShortcut from "./command-shortcut.svelte";
  import { useStyles } from "./command.context";
  import type { CommandItem } from "./command.types";

  type Props = Omit<
    ComponentProps<typeof CommandRoot>,
    "collection" | "children"
  > &
    Omit<CommandContract, "emptyText" | "items" | "placeholder"> & {
      /** Text shown when no item matches. */
      emptyText?: string | Snippet;
      /** Footer content, such as keyboard hints. */
      footer?: Snippet;
      /** Items; grouped by `group` and filtered as the user types. */
      items: CommandItem[];
      /** Search input placeholder. */
      placeholder?: string;
    };

  let {
    classNames,
    emptyText,
    footer,
    items,
    onInputValueChange,
    placeholder,
    ...rest
  }: Props = $props();

  const { m } = useLocale();
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection<CommandItem>({
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

{#snippet itemList(groupItems: CommandItem[])}
  {#each groupItems as item (item.value)}
    <ComboboxItem {item}>
      {#if item.icon}
        <item.icon />
      {/if}
      {item.label}
      {#if item.shortcut}
        <CommandShortcut class={classNames?.shortcut}>
          {item.shortcut}
        </CommandShortcut>
      {/if}
    </ComboboxItem>
  {/each}
{/snippet}

{#snippet searchInput()}
  {@const styles = useStyles()}
  <CommandControl class={classNames?.control}>
    <InputGroup class={styles.slots.input({ class: classNames?.input })}>
      <InputGroup.Addon>
        <MagnifyingGlassIcon
          aria-hidden="true"
          class={styles.slots.inputIcon({ class: classNames?.inputIcon })}
        />
      </InputGroup.Addon>
      <ComboboxInput>
        {#snippet asChild(props)}
          <InputGroup.Input
            {...props({
              autofocus: true,
              placeholder: m("command.placeholder", placeholder),
            })}
          />
        {/snippet}
      </ComboboxInput>
    </InputGroup>
  </CommandControl>
{/snippet}

<CommandRoot
  {...rest}
  {collection}
  onInputValueChange={(details) => {
    filter(details.inputValue);
    onInputValueChange?.(details);
  }}
>
  {@render searchInput()}

  <CommandContent class={classNames?.content}>
    <CommandEmpty class={classNames?.empty}>
      {#if typeof emptyText === "function"}
        {@render emptyText()}
      {:else}
        {m("command.empty", emptyText)}
      {/if}
    </CommandEmpty>

    <CommandListWrapper class={classNames?.listWrapper}>
      <CommandList class={classNames?.list}>
        {#each groups as [group, groupItems], index (group)}
          {#if group}
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>{group}</ComboboxItemGroupLabel>
              {@render itemList(groupItems)}
              {#if index < groups.length - 1}
                <CommandSeparator class={classNames?.separator} />
              {/if}
            </ComboboxItemGroup>
          {:else}
            {@render itemList(groupItems)}
          {/if}
        {/each}
      </CommandList>
    </CommandListWrapper>
  </CommandContent>

  {#if footer}
    <CommandFooter class={classNames?.footer}>{@render footer()}</CommandFooter>
  {/if}
</CommandRoot>
