<script lang="ts">
  import {
    type CreateToasterReturn,
    Portal,
    Toaster as ToasterPrimitive,
  } from "@ark-ui/svelte";
  import type { ToastRootContract } from "@pisagor/contracts";
  import { toastRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { toast as defaultToast } from "./toast";
  import ToastItem from "./toast-item.svelte";

  type Props = Omit<
    import("@ark-ui/svelte").ToasterProps,
    "toaster" | "children" | "style"
  > & {
    style?: string | undefined;
    toaster?: CreateToasterReturn;
  } & ToastRootContract;

  let {
    toaster: toasterInstance = defaultToast,
    recipe = toastRecipe,
    class: className,
    style,
    ...rest
  }: Props = $props();

  const toasterStyle = $derived(
    ["--width: 356px", style].filter(Boolean).join("; "),
  );
</script>

<Portal>
  <ToasterPrimitive
    {...rest}
    class={recipe({ class: cn(className) })}
    style={toasterStyle}
    toaster={toasterInstance}
  >
    {#snippet children(toastItem)}
      <ToastItem toast={toastItem} />
    {/snippet}
  </ToasterPrimitive>
</Portal>
