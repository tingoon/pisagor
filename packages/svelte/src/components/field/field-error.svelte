<script lang="ts">
import {
  type FieldErrorTextProps,
  Field as FieldPrimitive,
} from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

let { class: className, children, ...rest }: FieldErrorTextProps = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.ErrorText
  {...rest}
  class={slots.error({ class: cn(className) })}
>
  {@render children?.()}
</FieldPrimitive.ErrorText>
