<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./alert.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const action = withContext(() => rest, { name: "Action" });
</script>

<div {...action.props}>
  {@render children?.()}
</div>
