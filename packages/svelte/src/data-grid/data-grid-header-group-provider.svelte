<script lang="ts">
import { setDataGridHeaderGroupContext } from "./data-grid.context";

type Props = {
  headerGroup: any;
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
