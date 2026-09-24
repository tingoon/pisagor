import type { Cell, RowData } from "@tanstack/svelte-table";
import type { DataGridFeatures } from "./data-grid.features";

/** Prefer `<FlexRender cell={cell} />` in templates. Kept for API parity. */
export function renderDataGridCell<TData extends RowData>(
  cell: Cell<DataGridFeatures, TData, unknown>,
) {
  if (cell.getIsPlaceholder()) return null;
  return cell;
}
