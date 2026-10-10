<script lang="ts">
import {
  type PopoverDescriptionProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";
import { withContext } from "./popover.context";

let { children, ...rest }: PopoverDescriptionProps = $props();
const part = withContext(() => rest, { name: "Description" });
</script>

<PopoverPrimitive.Description {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Description>
