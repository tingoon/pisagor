<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./menu.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
};

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Group" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
