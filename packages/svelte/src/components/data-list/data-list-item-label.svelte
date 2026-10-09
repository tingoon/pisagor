<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./data-list.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, {
  defaultProps: { "data-part": "item-label" },
  name: "Label",
});
</script>

<Ark as="dt" {...part.props}> {@render children?.()} </Ark>
