<script lang="ts">
  import {
    Avatar as AvatarPrimitive,
    type AvatarFallbackProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./avatar.context";

  let { children, ...rest }: AvatarFallbackProps = $props();
  const part = withContext(() => rest, { name: "Fallback" });
</script>

<AvatarPrimitive.Fallback {...part.props}>
  {@render children?.()}
</AvatarPrimitive.Fallback>
