<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./command.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Footer" });
</script>

<div {...part.props}>{@render children?.()}</div>
