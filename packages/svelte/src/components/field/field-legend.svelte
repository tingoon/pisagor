<script lang="ts">
  import {
    Fieldset as FieldsetPrimitive,
    type FieldsetLegendProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useFieldSlots } from "./field.context";

  type Props = FieldsetLegendProps & { variant?: "legend" | "label" };

  let {
    variant = "legend",
    class: className,
    children,
    ...rest
  }: Props = $props();
  const slots = useFieldSlots();
</script>

<FieldsetPrimitive.Legend
  {...rest}
  class={slots.legend({ class: cn(className) })}
  data-variant={variant}
>
  {@render children?.()}
</FieldsetPrimitive.Legend>
