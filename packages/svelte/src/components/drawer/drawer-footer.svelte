<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./drawer.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Footer" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
