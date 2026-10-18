/** Minimal TanStack column shape needed by the data-grid a11y helpers. */
interface SortableColumn {
  getCanSort: () => boolean;
  getIsSorted: () => false | "asc" | "desc";
}

interface ResizableColumn {
  id: string;
  getSize: () => number;
  resetSize: () => void;
  columnDef: { minSize?: number; maxSize?: number };
}

/** `aria-sort` value for a header cell; `undefined` when the column cannot sort. */
export function getColumnAriaSort(
  column: SortableColumn,
): "ascending" | "descending" | "none" | undefined {
  if (!column.getCanSort()) {
    return undefined;
  }
  const sorted = column.getIsSorted();
  if (sorted === "asc") {
    return "ascending";
  }

  return sorted === "desc" ? "descending" : "none";
}

/**
 * Keyboard handler for a column resize handle: ArrowLeft/ArrowRight resize by
 * 10px (clamped to the column min/max), Enter resets to the default size.
 */
export function handleColumnResizeKeyDown(
  event: KeyboardEvent,
  column: ResizableColumn,
  setSize: (id: string, size: number) => void,
): void {
  if (event.key === "Enter") {
    event.preventDefault();
    column.resetSize();

    return;
  }
  const delta =
    event.key === "ArrowRight" ? 10 : event.key === "ArrowLeft" ? -10 : 0;
  if (!delta) {
    return;
  }
  event.preventDefault();
  const { minSize = 20, maxSize = Number.POSITIVE_INFINITY } = column.columnDef;
  setSize(
    column.id,
    Math.min(maxSize, Math.max(minSize, column.getSize() + delta)),
  );
}
