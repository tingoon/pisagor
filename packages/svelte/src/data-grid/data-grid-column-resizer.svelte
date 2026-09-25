<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useDataGridContext, useDataGridHeaderCellContext } from "./data-grid.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};

let { class: className, ...rest }: Props = $props();
const headerCell = useDataGridHeaderCellContext();
const { slots } = useDataGridContext();
</script>

{#if headerCell?.header.column.getCanResize()}
  <div
    {...rest}
    aria-hidden="true"
    class={cn(slots.columnResizer(), headerCell.header.column.getIsResizing() && "bg-primary", className)}
    data-part="column-resizer"
    data-scope="data-grid"
    ondblclick={() => headerCell.header.column.resetSize()}
    onmousedown={headerCell.header.getResizeHandler()}
    ontouchstart={headerCell.header.getResizeHandler()}
  ></div>
{/if}
