<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { withContext } from "./navbar.context";

  const { m } = useLocale();

  let {
    "aria-label": ariaLabel = m("navbar.label"),
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Nav" });
</script>

<Ark as="nav" {...part.props} aria-label={ariaLabel}>
  {@render children?.()}
</Ark>
