<script lang="ts">
import {
  Switch as SwitchPrimitive,
  type SwitchThumbProps,
} from "@ark-ui/svelte/switch";
import { withContext } from "./switch.context";

let { children, ...rest }: SwitchThumbProps = $props();
const part = withContext(() => rest, { name: "Thumb" });
</script>

<SwitchPrimitive.Thumb {...part.props}>
  {@render children?.()}
</SwitchPrimitive.Thumb>
