<script lang="ts">
import {
  type EditableControlProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";
import { withContext } from "./editable.context";

let { children, ...rest }: EditableControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<EditablePrimitive.Control {...part.props}>
  {@render children?.()}
</EditablePrimitive.Control>
