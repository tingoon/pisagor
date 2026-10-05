<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useDataGridContext } from "./data-grid.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useDataGridContext();
</script>

<div
  {...rest}
  class={slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="data-grid"
>
  {@render children?.()}
</div>
