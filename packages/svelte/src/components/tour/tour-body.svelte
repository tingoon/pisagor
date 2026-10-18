<script lang="ts">
  import { dialogRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { ScrollArea } from "../scroll-area";

  type Props = HTMLAttributes<HTMLDivElement> & {
    scrollFade?: boolean;
  };

  let {
    scrollFade = false,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const dialogSlots = $derived(dialogRecipe());
</script>

<ScrollArea {scrollFade}>
  <div
    {...rest}
    class={dialogSlots.body({ class: cn(className) })}
    data-part="body"
    data-scope="tour"
  >
    {@render children?.()}
  </div></ScrollArea
>
