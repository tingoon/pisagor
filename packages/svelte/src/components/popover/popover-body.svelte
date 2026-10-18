<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { ScrollArea } from "../scroll-area";
  import { withContext } from "./popover.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withContext(
    () => ({
      ...rest,
      class: ["overflow-visible", rest.class].filter(Boolean).join(" "),
    }),
    { name: "Body" },
  );
</script>

<ScrollArea>
  <div {...part.props}>{@render children?.()}</div></ScrollArea
>
