<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
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
  ctx.onOpen?.();
  onclick?.(e);
}
</script>

<Ark
  as="button"
  {...rest}
  aria-expanded={ctx.isOpen}
  class={className}
  data-part="trigger"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
