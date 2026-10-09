<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./command.context";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Shortcut" });
</script>

<span {...part.props}>{@render children?.()}</span>
