<script lang="ts">
import type { EditableInputProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";

type Props = Omit<EditableInputProps, "size">;
let props: Props = $props();
</script>

<EditablePrimitive.Input {...props} />
