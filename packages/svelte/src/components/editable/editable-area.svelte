<script lang="ts">
import {
  type EditableAreaProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";
import { cn } from "@pisagor/utils";
import { useEditable } from "./editable.context";

let { class: className, children, ...rest }: EditableAreaProps = $props();
const { slots } = useEditable();
</script>

<EditablePrimitive.Area {...rest} class={slots.area({ class: cn(className) })}>
  {@render children?.()}
</EditablePrimitive.Area>
