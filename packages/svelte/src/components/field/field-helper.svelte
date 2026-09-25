<script lang="ts">
import type { FieldHelperTextProps } from "@ark-ui/svelte/field";
import { Field as FieldPrimitive } from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

type Props = Omit<FieldHelperTextProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.HelperText {...rest} class={slots.helper({ class: cn(className) })}>
  {@render children?.()}
</FieldPrimitive.HelperText>
