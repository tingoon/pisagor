<script lang="ts">
import {
  Popover as PopoverPrimitive,
  type PopoverTitleProps,
} from "@ark-ui/svelte/popover";
import { withContext } from "./popover.context";

let { children, ...rest }: PopoverTitleProps = $props();
const part = withContext(() => rest, { name: "Title" });
</script>

<PopoverPrimitive.Title {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Title>
