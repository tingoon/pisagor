<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./frame.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, {
  defaultProps: { "data-part": "panel-description" },
  name: "Description",
  slot: "panelDescription",
});
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
