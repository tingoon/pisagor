<script lang="ts">
import { setDataTableRowContext } from "./data-table.context";

type Props = {
  row: any;
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
