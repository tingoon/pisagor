<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { useDataGridContext } from "./data-grid.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useDataGridContext();
</script>

<div
  {...rest}
  class={slots.toolbar({ class: className })}
  data-part="toolbar"
  data-scope="data-grid"
>
  {@render children?.()}
</div>
