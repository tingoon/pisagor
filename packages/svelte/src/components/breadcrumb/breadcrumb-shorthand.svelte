<script lang="ts">
  import type {
    BreadcrumbContract,
    BreadcrumbPresetItem,
  } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import { CaretRightIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import BreadcrumbItem from "./breadcrumb-item.svelte";
  import BreadcrumbLink from "./breadcrumb-link.svelte";
  import BreadcrumbList from "./breadcrumb-list.svelte";
  import BreadcrumbPage from "./breadcrumb-page.svelte";
  import BreadcrumbRoot from "./breadcrumb-root.svelte";
  import BreadcrumbSeparator from "./breadcrumb-separator.svelte";

  type PresetItem = Omit<BreadcrumbPresetItem, "label"> & {
    label: string;
  };

  type Props = Omit<ComponentProps<typeof BreadcrumbRoot>, "children"> &
    Omit<BreadcrumbContract, "items"> & {
      items?: PresetItem[];
      /** Separator content between items. Defaults to a caret icon. */
      separator?: Snippet;
    };

  let {
    class: className,
    classNames,
    items,
    separator,
    ...rest
  }: Props = $props();
</script>

<BreadcrumbRoot {...rest} class={cn(classNames?.base, className)}>
  {#if items}
    <BreadcrumbList class={classNames?.list}>
      {#each items as item, index (`${index}:${item.href ?? item.label}`)}
        {#if index > 0}
          <BreadcrumbSeparator class={classNames?.separator}>
            {#if separator}
              {@render separator()}
            {:else}
              <CaretRightIcon />
            {/if}
          </BreadcrumbSeparator>
        {/if}
        <BreadcrumbItem>
          {#if item.isCurrentPage}
            <BreadcrumbPage>{item.label}</BreadcrumbPage>
          {:else if item.href}
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          {:else}
            {item.label}
          {/if}
        </BreadcrumbItem>
      {/each}
    </BreadcrumbList>
  {/if}
</BreadcrumbRoot>
