<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useDataTableContext } from "./data-table.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useDataTableContext();
</script>

<div
  {...rest}
  class={slots.toolbar({ class: cn(className) })}
  data-part="toolbar"
  data-scope="data-table"
>
  {@render children?.()}
</div>
