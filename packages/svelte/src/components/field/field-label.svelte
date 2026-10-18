<script lang="ts">
  import {
    Field as FieldPrimitive,
    type FieldLabelProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useFieldSlots } from "./field.context";

  let { class: className, children, ...rest }: FieldLabelProps = $props();
  const slots = useFieldSlots();
</script>

<FieldPrimitive.Label {...rest} class={slots.label({ class: cn(className) })}>
  {@render children?.()}
</FieldPrimitive.Label>
