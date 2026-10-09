<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./frame.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, {
  defaultProps: { "data-part": "panel-header" },
  name: "Header",
  slot: "panelHeader",
});
</script>

<Ark as="header" {...part.props}> {@render children?.()} </Ark>
