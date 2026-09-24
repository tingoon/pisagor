<script lang="ts">
import type { EditableAreaProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";
import { cn } from "@pisagor/utils";
import { useEditable } from "./editable.context";

type Props = Omit<EditableAreaProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useEditable();
</script>

<EditablePrimitive.Area {...rest} class={slots.area({ class: cn(className) })}>
  {@render children?.()}
</EditablePrimitive.Area>
