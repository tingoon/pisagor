<script lang="ts">
  import {
    Field as FieldPrimitive,
    type FieldHelperTextProps,
  } from "@ark-ui/svelte";
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
