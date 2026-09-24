<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { type CreateToasterReturn, Toaster as ToasterPrimitive } from "@ark-ui/svelte/toast";
import { toastRecipe } from "@pisagor/recipes/toast";
import { cn } from "@pisagor/utils";
import { toast as defaultToast } from "./toast";
import ToastItem from "./toast-item.svelte";

type Props = Omit<
  import("@ark-ui/svelte/toast").ToasterProps,
  "toaster" | "children" | "class" | "style"
> & {
  class?: string | undefined;
  recipe?: typeof toastRecipe;
  style?: string | undefined;
  toaster?: CreateToasterReturn;
};

let {
  toaster: toasterInstance = defaultToast,
  recipe = toastRecipe,
  class: className,
  style,
  ...rest
}: Props = $props();

const toasterStyle = $derived(["--width: 356px", style].filter(Boolean).join("; "));
</script>

<Portal>
  <ToasterPrimitive
    {...rest}
    class={recipe({ class: cn(className) })}
    style={toasterStyle}
    toaster={toasterInstance}
  >
    {#snippet children(
  toastItem,
)}
      <ToastItem toast={toastItem} />
    {/snippet}
  </ToasterPrimitive>
</Portal>
