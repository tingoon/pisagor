<script lang="ts">
import { setDataGridHeaderCellContext } from "./data-grid.context";

type Props = {
  header: any;
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
