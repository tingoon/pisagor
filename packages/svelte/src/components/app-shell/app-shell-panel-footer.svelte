<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAppShell } from "./app-shell.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<div
  {...rest}
  class={ctx.slots.panelFooter({ class: cn(className) })}
  data-part="panel-footer"
  data-scope="app-shell"
>
  {@render children?.()}
</div>
