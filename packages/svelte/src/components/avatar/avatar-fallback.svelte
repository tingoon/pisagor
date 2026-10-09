<script lang="ts">
import {
  type AvatarFallbackProps,
  Avatar as AvatarPrimitive,
} from "@ark-ui/svelte/avatar";
import { withContext } from "./avatar.context";

let { children, ...rest }: AvatarFallbackProps = $props();
const part = withContext(() => rest, { name: "Fallback" });
</script>

<AvatarPrimitive.Fallback {...part.props}>
  {@render children?.()}
</AvatarPrimitive.Fallback>
