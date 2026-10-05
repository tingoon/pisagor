<script lang="ts">
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { useAppShell } from "./app-shell.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useAppShell();
</script>

<ScrollArea class={ctx.slots.scrollArea()}>
  <div
    {...rest}
    class={ctx.slots.inspectorContent({ class: cn(className) })}
    data-part="inspector-content"
    data-scope="app-shell"
  >
    {@render children?.()}
  </div>
</ScrollArea>
