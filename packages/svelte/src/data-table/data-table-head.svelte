<script lang="ts">
import { FlexRender } from "@tanstack/svelte-table";
import type { ComponentProps } from "svelte";
import { Table } from "../components/table";
import { useDataTableHeaderGroupContext } from "./data-table.context";

type Props = ComponentProps<typeof Table.Head> & {
  columnId?: string;
  children?: import("svelte").Snippet;
};

let { columnId, children, class: className, ...rest }: Props = $props();
const { headerGroup } = useDataTableHeaderGroupContext();
</script>

{#if columnId}
  {@const header = headerGroup.headers.find((item) => item.column.id === columnId)}
  {#if header}
    <Table.Head {...rest} class={className} data-part="head" data-scope="data-table">
      {#if children}
        {@render children()}
      {:else}
        <FlexRender {header} />
      {/if}
    </Table.Head>
  {/if}
{:else}
  {#each headerGroup.headers as header (header.id)}
    <Table.Head {...rest} class={className} data-part="head" data-scope="data-table">
      <FlexRender {header} />
    </Table.Head>
  {/each}
{/if}
