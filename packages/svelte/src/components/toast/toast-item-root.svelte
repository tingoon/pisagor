<script lang="ts">
  import { Toast as ToastPrimitive, type ToastRootProps } from "@ark-ui/svelte";
  import type { ToastItemRootContract } from "@pisagor/props";
  import { withProvider } from "./toast.context";

  type Props = ToastRootProps & ToastItemRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<ToastPrimitive.Root {...root.props}>
  {@render children?.()}
</ToastPrimitive.Root>
