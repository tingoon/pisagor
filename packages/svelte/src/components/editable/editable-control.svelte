<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  let { children, ...rest }: EditableControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<EditablePrimitive.Control {...part.props}>
  {@render children?.()}
</EditablePrimitive.Control>
