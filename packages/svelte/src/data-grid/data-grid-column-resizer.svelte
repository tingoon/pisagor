<script lang="ts">
  import { cn, handleColumnResizeKeyDown } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useMessageResolver } from "../components/provider/context";
  import {
    useDataGridContext,
    useDataGridHeaderCellContext,
  } from "./data-grid.context";

  let { class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const headerCell = useDataGridHeaderCellContext();
  const { slots, table } = useDataGridContext();
  const t = useMessageResolver();
</script>

{#if headerCell?.header.column.getCanResize()}
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <!-- biome-ignore lint/a11y/useSemanticElements: focusable window-splitter handle; <hr> cannot take focus -->
  <div
    aria-label={t("dataGrid.resizeColumn")}
    {...rest}
    aria-orientation="vertical"
    aria-valuenow={headerCell.header.column.getSize()}
    class={slots.columnResizer({
      class: cn(className),
      resizing: headerCell.header.column.getIsResizing(),
    })}
    data-part="column-resizer"
    data-scope="data-grid"
    ondblclick={() => headerCell.header.column.resetSize()}
    onkeydown={(event) =>
      handleColumnResizeKeyDown(event, headerCell.header.column, (id, size) =>
        table.setColumnSizing((old) => ({ ...old, [id]: size })),
      )}
    onmousedown={headerCell.header.getResizeHandler()}
    ontouchstart={headerCell.header.getResizeHandler()}
    role="separator"
    tabindex="0"
  ></div>
{/if}
