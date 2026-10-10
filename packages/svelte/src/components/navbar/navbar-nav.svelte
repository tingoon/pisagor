<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./navbar.context";

let {
  "aria-label": ariaLabel = "Main",
  children,
  ...rest
}: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Nav" });
</script>

<Ark as="nav" {...part.props} aria-label={ariaLabel}>
  {@render children?.()}
</Ark>
