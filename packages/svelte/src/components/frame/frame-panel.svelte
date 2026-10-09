<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { setSurfaceContext } from "../surface/surface.context";
import { withContext } from "./frame.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Panel" });

setSurfaceContext({ depth: 1, variant: "default" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
