<script lang="ts">
import type { Row, RowData } from "@tanstack/svelte-table";
import { setDataGridRowContext } from "./data-grid.context";
import type { DataGridFeatures } from "./data-grid.features";

type Props = {
  row: Row<DataGridFeatures, RowData>;
  children?: import("svelte").Snippet;
};

let { row, children }: Props = $props();
setDataGridRowContext({
  get row() {
    return row;
  },
});
</script>

{@render children?.()}
