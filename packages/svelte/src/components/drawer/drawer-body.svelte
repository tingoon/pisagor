<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { useDrawer } from "./drawer.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
  scrollFade?: boolean;
};

let { scrollFade = false, class: className, children, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<ScrollArea {scrollFade}>
  <Ark
    as="div"
    {...rest}
    class={slots.body({ class: cn(className) })}
    data-part="body"
    data-scope="drawer"
  >
    {@render children?.()}
  </Ark>
</ScrollArea>
