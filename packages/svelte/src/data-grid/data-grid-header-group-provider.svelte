<script lang="ts">
import type { HeaderGroup, RowData } from "@tanstack/svelte-table";
import { setDataGridHeaderGroupContext } from "./data-grid.context";
import type { DataGridFeatures } from "./data-grid.features";

type Props = {
  headerGroup: HeaderGroup<DataGridFeatures, RowData>;
  children?: import("svelte").Snippet;
};

let { headerGroup, children }: Props = $props();
setDataGridHeaderGroupContext({
  get headerGroup() {
    return headerGroup;
  },
});
</script>

{@render children?.()}
