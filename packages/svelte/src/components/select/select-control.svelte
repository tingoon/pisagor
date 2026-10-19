<script lang="ts">
  import { Select as SelectPrimitive } from "@ark-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./select.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<SelectPrimitive.Control {...part.props}>
  {@render children?.()}
</SelectPrimitive.Control>
