<script lang="ts">
import type { EditableControlProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";
import { cn } from "@pisagor/utils";
import { useEditable } from "./editable.context";

type Props = Omit<EditableControlProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useEditable();
</script>

<EditablePrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</EditablePrimitive.Control>
