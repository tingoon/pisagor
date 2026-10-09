<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./avatar-group.context";

type Props = HTMLAttributes<HTMLDivElement>;

let { children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Count" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
