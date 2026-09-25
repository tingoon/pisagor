<script lang="ts">
import type { Header, RowData } from "@tanstack/svelte-table";
import { setDataGridHeaderCellContext } from "./data-grid.context";
import type { DataGridFeatures } from "./data-grid.features";

type Props = {
  header: Header<DataGridFeatures, RowData, unknown>;
  children?: import("svelte").Snippet;
};

let { header, children }: Props = $props();
setDataGridHeaderCellContext({
  get header() {
    return header;
  },
});
</script>

{@render children?.()}
