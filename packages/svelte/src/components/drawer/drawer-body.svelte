<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { ScrollArea } from "../scroll-area";
import { withContext } from "./drawer.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
  scrollFade?: boolean;
};

let { scrollFade = false, children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Body" });
</script>

<ScrollArea {scrollFade}>
  <Ark as="div" {...part.props}> {@render children?.()} </Ark>
</ScrollArea>
