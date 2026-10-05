<script lang="ts">
import {
  type EditableControlProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";
import { cn } from "@pisagor/utils";
import { useEditable } from "./editable.context";

let { class: className, children, ...rest }: EditableControlProps = $props();
const { slots } = useEditable();
</script>

<EditablePrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</EditablePrimitive.Control>
