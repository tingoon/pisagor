<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
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
</script>

<ScrollArea {scrollFade}>
  <Ark as="div" {...rest} class={className} data-part="body" data-scope="tour">
    {@render children?.()}
  </Ark>
</ScrollArea>
