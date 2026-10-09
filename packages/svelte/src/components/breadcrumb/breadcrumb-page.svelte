<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withBreadcrumbItemContext } from "./breadcrumb.context";

let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
const part = withBreadcrumbItemContext(() => rest, {
  defaultProps: { "aria-current": "page" },
  name: "Page",
});
</script>

<Ark as="span" {...part.props}> {@render children?.()} </Ark>
