<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withBottomNavigationContext } from "./bottom-navigation.context";

let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const part = withBottomNavigationContext(() => rest, { name: "List" });
</script>

<Ark as="div" {...part.props}> {@render children?.()} </Ark>
