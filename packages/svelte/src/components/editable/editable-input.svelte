<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  type Props = Omit<EditableInputProps, "size">;

  let props: Props = $props();
  const part = withContext(() => props, { name: "Input" });
</script>

<EditablePrimitive.Input {...part.props} />
