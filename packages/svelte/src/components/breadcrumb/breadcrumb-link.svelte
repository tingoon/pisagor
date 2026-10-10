<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { withBreadcrumbItemContext } from "./breadcrumb.context";

let { children, ...rest }: HTMLAnchorAttributes = $props();
const part = withBreadcrumbItemContext(() => rest, { name: "Link" });
</script>

<Ark as="a" {...part.props}> {@render children?.()} </Ark>
