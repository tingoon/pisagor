<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withBreadcrumbContext } from "./breadcrumb.context";

let { children, ...rest }: HTMLAttributes<HTMLOListElement> = $props();
const part = withBreadcrumbContext(() => rest, { name: "List" });
</script>

<Ark as="ol" {...part.props}> {@render children?.()} </Ark>
