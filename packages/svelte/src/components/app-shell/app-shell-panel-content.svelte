<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { useAppShell } from "./app-shell.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<ScrollArea class={ctx.slots.scrollArea()}>
  <div
    {...rest}
    class={ctx.slots.panelContent({ class: cn(className) })}
    data-part="panel-content"
    data-scope="app-shell"
  >
    {@render children?.()}
  </div>
</ScrollArea>
