<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./alert.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const title = withContext(() => rest, { name: "Title" });
</script>

<div {...title.props}>
  {@render children?.()}
</div>
