<script lang="ts">
import type { FieldLabelProps } from "@ark-ui/svelte/field";
import { Field as FieldPrimitive } from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

type Props = Omit<FieldLabelProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.Label {...rest} class={slots.label({ class: cn(className) })}>
  {@render children?.()}
</FieldPrimitive.Label>
