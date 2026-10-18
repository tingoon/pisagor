<script lang="ts">
  import type {
    BreadcrumbPresetItem,
    BreadcrumbRootContract,
    BreadcrumbContract,
  } from "@pisagor/props";
  import type { ComponentProps } from "svelte";
  import BreadcrumbItem from "./breadcrumb-item.svelte";
  import BreadcrumbLink from "./breadcrumb-link.svelte";
  import BreadcrumbList from "./breadcrumb-list.svelte";
  import BreadcrumbPage from "./breadcrumb-page.svelte";
  import BreadcrumbRoot from "./breadcrumb-root.svelte";
  import BreadcrumbSeparator from "./breadcrumb-separator.svelte";

  type PresetItem = Omit<BreadcrumbPresetItem, "label"> & {
    label: string;
  };

  type Props = Omit<ComponentProps<typeof BreadcrumbRoot>, "children"> & {
    items?: PresetItem[];
  } & BreadcrumbRootContract &
    BreadcrumbContract;

  let { items, ...rest }: Props = $props();
</script>

<BreadcrumbRoot {...rest}>
  {#if items}
    <BreadcrumbList>
      {#each items as item, index (`${index}:${item.href ?? item.label}`)}
        {#if index > 0}
          <BreadcrumbSeparator />
        {/if}
        <BreadcrumbItem>
          {#if item.isCurrentPage}
            <BreadcrumbPage>{item.label}</BreadcrumbPage>
          {:else if item.href}
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          {:else}
            <BreadcrumbPage>{item.label}</BreadcrumbPage>
          {/if}
        </BreadcrumbItem>
      {/each}
    </BreadcrumbList>
  {/if}
</BreadcrumbRoot>
