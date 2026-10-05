<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import {
  useDataGridContext,
  useDataGridHeaderCellContext,
} from "./data-grid.context";

let { class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const headerCell = useDataGridHeaderCellContext();
const { slots } = useDataGridContext();
</script>

{#if headerCell?.header.column.getCanResize()}
  <div
    {...rest}
    aria-hidden="true"
    class={slots.columnResizer({
      class: cn(className),
      resizing: headerCell.header.column.getIsResizing(),
    })}
    data-part="column-resizer"
    data-scope="data-grid"
    ondblclick={() => headerCell.header.column.resetSize()}
    onmousedown={headerCell.header.getResizeHandler()}
    ontouchstart={headerCell.header.getResizeHandler()}
  ></div>
{/if}
