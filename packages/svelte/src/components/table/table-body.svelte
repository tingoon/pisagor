<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./table.context";

let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Body" });
</script>

<Ark as="tbody" {...part.props}> {@render children?.()} </Ark>
