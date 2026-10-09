<script lang="ts">
import {
  type EditableAreaProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";
import { withContext } from "./editable.context";

let { children, ...rest }: EditableAreaProps = $props();
const part = withContext(() => rest, { name: "Area" });
</script>

<EditablePrimitive.Area {...part.props}>
  {@render children?.()}
</EditablePrimitive.Area>
