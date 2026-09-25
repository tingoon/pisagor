<script lang="ts">
import { setDataTableHeaderGroupContext } from "./data-table.context";

type Props = {
  headerGroup: any;
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
