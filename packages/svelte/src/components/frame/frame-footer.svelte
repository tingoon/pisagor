<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./frame.context";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, {
  defaultProps: { "data-part": "panel-footer" },
  name: "Footer",
  slot: "panelFooter",
});
</script>

<Ark as="footer" {...part.props}> {@render children?.()} </Ark>
