<script lang="ts">
import {
  type FieldHelperTextProps,
  Field as FieldPrimitive,
} from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

let { class: className, children, ...rest }: FieldHelperTextProps = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.HelperText
  {...rest}
  class={slots.helper({ class: cn(className) })}
>
  {@render children?.()}
</FieldPrimitive.HelperText>
