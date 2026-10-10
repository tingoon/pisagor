<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { withContext } from "./link-box.context";

type Props = HTMLAnchorAttributes & { children?: import("svelte").Snippet };

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Overlay" });
</script>

<Ark as="a" {...part.props}> {@render children?.()} </Ark>
