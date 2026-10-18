<script lang="ts">
  import {
    Avatar as AvatarPrimitive,
    type AvatarImageProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./avatar.context";

  let { ...rest }: AvatarImageProps = $props();
  const part = withContext(() => rest, { name: "Image" });
</script>

<AvatarPrimitive.Image {...part.props} />
