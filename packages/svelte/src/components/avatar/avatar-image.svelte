<script lang="ts">
import {
  type AvatarImageProps,
  Avatar as AvatarPrimitive,
} from "@ark-ui/svelte/avatar";
import { withContext } from "./avatar.context";

let { ...rest }: AvatarImageProps = $props();
const part = withContext(() => rest, { name: "Image" });
</script>

<AvatarPrimitive.Image {...part.props} />
