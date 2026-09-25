<script lang="ts">
import type { Row, RowData } from "@tanstack/svelte-table";
import { setDataTableRowContext } from "./data-table.context";
import type { DataTableFeatures } from "./data-table.features";

type Props = {
  row: Row<DataTableFeatures, RowData>;
  children?: import("svelte").Snippet;
};

let { row, children }: Props = $props();
setDataTableRowContext({
  get row() {
    return row;
  },
});
</script>

{@render children?.()}
