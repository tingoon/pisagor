<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

type Props = Omit<HTMLButtonAttributes, "class"> & { class?: string | undefined };
let { onclick, class: className, children, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Ark
  as="button"
  {...rest}
  aria-label="Close"
  class={ctx.slots.close({ class: cn(className) })}
  data-part="close"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={(e) => {
  ctx.onClose?.();
  onclick?.(e);
}}
  type="button"
>
  {@render children?.()}
</Ark>
