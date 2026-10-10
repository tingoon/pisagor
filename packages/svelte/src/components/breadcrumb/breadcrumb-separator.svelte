<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import type { HTMLAttributes } from "svelte/elements";
import { withBreadcrumbContext } from "./breadcrumb.context";

let { children, ...rest }: HTMLAttributes<HTMLLIElement> = $props();
const part = withBreadcrumbContext(() => rest, { name: "Separator" });
</script>

<Ark as="li" {...part.props} aria-hidden="true" role="presentation">
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon />
  {/if}
</Ark>
