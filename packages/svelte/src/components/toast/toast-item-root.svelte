<script lang="ts">
import {
  Toast as ToastPrimitive,
  type ToastRootProps,
} from "@ark-ui/svelte/toast";
import type { ToastItemProps as BaseToastItemProps } from "@pisagor/props";
import { withProvider } from "./toast.context";

type Props = ToastRootProps & BaseToastItemProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<ToastPrimitive.Root {...root.props}>
  {@render children?.()}
</ToastPrimitive.Root>
