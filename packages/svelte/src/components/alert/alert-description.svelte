<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./alert.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const description = withContext(() => rest, { name: "Description" });
</script>

<div {...description.props}>
  {@render children?.()}
</div>
