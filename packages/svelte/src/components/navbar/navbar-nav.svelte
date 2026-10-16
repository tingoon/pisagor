<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useMessageResolver } from "../provider/context";
import { withContext } from "./navbar.context";

const t = useMessageResolver();

let {
  "aria-label": ariaLabel = t("navbar.label"),
  children,
  ...rest
}: HTMLAttributes<HTMLElement> = $props();
const part = withContext(() => rest, { name: "Nav" });
</script>

<Ark as="nav" {...part.props} aria-label={ariaLabel}>
  {@render children?.()}
</Ark>
