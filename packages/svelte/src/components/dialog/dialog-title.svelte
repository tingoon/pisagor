<script lang="ts">
import {
  Dialog as DialogPrimitive,
  type DialogTitleProps,
} from "@ark-ui/svelte/dialog";
import { cn } from "@pisagor/utils";
import { useDialog } from "./dialog.context";

let { children, class: className, ...rest }: DialogTitleProps = $props();
const { slots } = useDialog();
</script>

<DialogPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</DialogPrimitive.Title>
