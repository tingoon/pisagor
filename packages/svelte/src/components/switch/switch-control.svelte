<script lang="ts">
import {
  type SwitchControlProps,
  Switch as SwitchPrimitive,
} from "@ark-ui/svelte/switch";
import { withContext } from "./switch.context";

let { children, ...rest }: SwitchControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<SwitchPrimitive.Control {...part.props}>
  {@render children?.()}
</SwitchPrimitive.Control>
