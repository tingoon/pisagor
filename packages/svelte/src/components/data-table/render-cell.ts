import type { Cell, RowData } from "@tanstack/svelte-table";
import type { DataTableFeatures } from "./data-table.features";

/** Prefer `<FlexRender cell={cell} />` in templates. Kept for API parity. */
export function renderDataTableCell<TData extends RowData>(
  cell: Cell<DataTableFeatures, TData, unknown>,
) {
  return cell;
}
