<script lang="ts">
  import {
    type CollectionItem,
    Combobox as ComboboxPrimitive,
    createListCollection,
    Portal,
    type ComboboxRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type {
    ComboboxContract,
    ComboboxPresetItem,
    ComboboxRootContract,
  } from "@pisagor/contracts";
  import { CaretUpDownIcon, CheckIcon, XIcon } from "phosphor-svelte";
  import type { ComponentProps } from "svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import ComboboxClearTrigger from "./combobox-clear-trigger.svelte";
  import ComboboxContent from "./combobox-content.svelte";
  import ComboboxControl from "./combobox-control.svelte";
  import ComboboxEmpty from "./combobox-empty.svelte";
  import ComboboxInput from "./combobox-input.svelte";
  import ComboboxItem from "./combobox-item.svelte";
  import ComboboxItemIndicator from "./combobox-item-indicator.svelte";
  import ComboboxList from "./combobox-list.svelte";
  import ComboboxPositioner from "./combobox-positioner.svelte";
  import ComboboxRoot from "./combobox-root.svelte";
  import ComboboxTrigger from "./combobox-trigger.svelte";

  type PresetItem = Omit<ComboboxPresetItem, "label"> & { label: string };
  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<
    ComponentProps<typeof ComboboxRoot>,
    "children" | "collection" | "onValueChange"
  > &
    Omit<ComboboxRootContract, "items" | "placeholder"> &
    Omit<ComboboxContract, "items" | "placeholder"> & {
      clearable?: boolean;
      id?: string;
      items?: Array<PresetItem | string>;
      placeholder?: string;
      showTrigger?: boolean;
      size?: "sm" | "md" | "lg";
      variant?: FormControlVariant;
      onValueChange?: (value: string[]) => void;
    };

  let {
    clearable = false,
    showTrigger = true,
    items = [],
    id,
    placeholder,
    size = "md",
    variant,
    class: className,
    classNames,
    onValueChange,
    ...rest
  }: Props = $props();

  const { m } = useLocale();
  const normalized = $derived(
    items.map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = $derived(createListCollection({ items: normalized }));

  function handleValueChange(
    details: Parameters<
      NonNullable<ArkRootProps<CollectionItem>["onValueChange"]>
    >[0],
  ) {
    onValueChange?.(details.value);
  }
</script>

<ComboboxRoot
  {...rest}
  {collection}
  onValueChange={onValueChange ? handleValueChange : undefined}
  openOnClick
>
  <ComboboxControl>
    <InputGroup class={className} {size} {variant}>
      <ComboboxInput>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} {id} {placeholder} />
        {/snippet}
      </ComboboxInput>
      <InputGroup.Addon align="inline-end">
        {#if showTrigger}
          <ComboboxTrigger class={classNames?.triggerHidden}>
            {#snippet asChild(props)}
              <InputGroup.Button
                {...props({ class: classNames?.triggerButton })}
                aria-label={m("combobox.toggle")}
                size="icon-xs"
                variant="ghost"
              >
                <CaretUpDownIcon aria-hidden="true" />
              </InputGroup.Button>
            {/snippet}
          </ComboboxTrigger>
        {/if}
        {#if clearable}
          <ComboboxPrimitive.Context>
            {#snippet render(combobox)}
              {#if combobox().inputValue}
                <ComboboxClearTrigger>
                  {#snippet asChild(props)}
                    <InputGroup.Button
                      {...props()}
                      aria-label={m("combobox.clear")}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <XIcon aria-hidden="true" />
                    </InputGroup.Button>
                  {/snippet}
                </ComboboxClearTrigger>
              {/if}
            {/snippet}
          </ComboboxPrimitive.Context>
        {/if}
      </InputGroup.Addon>
    </InputGroup>
  </ComboboxControl>
  <Portal>
    <ComboboxPositioner>
      <ComboboxContent class={classNames?.content}>
        <ComboboxList class={classNames?.list}>
          {#each normalized as item (item.value)}
            <ComboboxItem class={classNames?.item} {item} persistFocus>
              {item.label}
              <ComboboxItemIndicator class={classNames?.itemIndicator}>
                <CheckIcon />
              </ComboboxItemIndicator>
            </ComboboxItem>
          {/each}
        </ComboboxList>
        <ComboboxEmpty class={classNames?.empty}
          >{m("combobox.empty")}</ComboboxEmpty
        >
      </ComboboxContent>
    </ComboboxPositioner>
  </Portal>
</ComboboxRoot>
