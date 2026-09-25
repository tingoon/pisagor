<script lang="ts">
import type { HeaderGroup, RowData } from "@tanstack/svelte-table";
import { setDataTableHeaderGroupContext } from "./data-table.context";
import type { DataTableFeatures } from "./data-table.features";

type Props = {
  headerGroup: HeaderGroup<DataTableFeatures, RowData>;
  children?: import("svelte").Snippet;
};

let { headerGroup, children }: Props = $props();
setDataTableHeaderGroupContext({
  get headerGroup() {
    return headerGroup;
  },
});
</script>

{@render children?.()}
