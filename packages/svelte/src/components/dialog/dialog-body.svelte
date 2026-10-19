<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { ScrollArea } from "../scroll-area";
  import { useDialog } from "./dialog.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
    scrollFade?: boolean;
  };

  let {
    children,
    class: className,
    scrollFade = false,
    ...rest
  }: Props = $props();
  const { slots } = useDialog();
</script>

<ScrollArea {scrollFade}>
  <div
    {...rest}
    class={slots.body({ class: cn(className) })}
    data-part="body"
    data-scope="dialog"
  >
    {@render children?.()}
  </div></ScrollArea
>
