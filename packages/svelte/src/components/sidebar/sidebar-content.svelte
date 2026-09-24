<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * Whether to add a scroll fade effect to the sidebar content.
   * @defaultValue false
   */
  scrollFade?: boolean;
};

let { scrollFade = false, class: className, children, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<ScrollArea class={ctx.slots.scrollArea()} {scrollFade}>
  <Ark
    as="div"
    {...rest}
    class={ctx.slots.content({ class: cn(className) })}
    data-part="content"
    data-scope="sidebar"
    data-sidebar="content"
  >
    {@render children?.()}
  </Ark>
</ScrollArea>
