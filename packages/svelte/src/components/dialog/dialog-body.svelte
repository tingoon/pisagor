<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { useDialog } from "./dialog.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  scrollFade?: boolean;
};

let { children, class: className, scrollFade = false, ...rest }: Props = $props();
const { slots } = useDialog();
</script>

<ScrollArea {scrollFade}>
  <Ark
    as="div"
    {...rest}
    class={slots.body({ class: cn(className) })}
    data-part="body"
    data-scope="dialog"
  >
    {@render children?.()}
  </Ark>
</ScrollArea>
