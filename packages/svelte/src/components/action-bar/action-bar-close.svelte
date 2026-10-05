<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

let {
  onclick,
  class: className,
  children,
  ...rest
}: HTMLButtonAttributes = $props();
const ctx = useActionBar();

function handleClick(
  e: Parameters<NonNullable<HTMLButtonAttributes["onclick"]>>[0],
) {
  ctx.onClose?.();
  onclick?.(e);
}
</script>

<Ark
  as="button"
  {...rest}
  aria-label="Close"
  class={ctx.slots.close({ class: cn(className) })}
  data-part="close"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
