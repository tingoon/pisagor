<script lang="ts">
import { setDataGridRowContext } from "./data-grid.context";

type Props = {
  row: any;
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
