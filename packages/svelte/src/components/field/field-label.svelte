<script lang="ts">
import {
  type FieldLabelProps,
  Field as FieldPrimitive,
} from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

let { class: className, children, ...rest }: FieldLabelProps = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.Label {...rest} class={slots.label({ class: cn(className) })}>
  {@render children?.()}
</FieldPrimitive.Label>
