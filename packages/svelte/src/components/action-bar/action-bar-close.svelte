<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

type Props = Omit<HTMLButtonAttributes, "class"> & {
  class?: string | undefined;
};
let { onclick, class: className, children, ...rest }: Props = $props();
const ctx = useActionBar();

function handleClick(e: Parameters<NonNullable<Props["onclick"]>>[0]) {
  ctx.onClose?.();
  onclick?.(e);
}
</script>

<Ark
  as="button"
  {...rest}
  aria-label="Close"
  class={ctx.slots.close({ class: className })}
  data-part="close"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
