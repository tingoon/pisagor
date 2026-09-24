<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

type Props = Omit<HTMLButtonAttributes, "class"> & { class?: string | undefined };
let { onclick, class: className, children, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Ark
  as="button"
  {...rest}
  aria-expanded={ctx.isOpen}
  class={className}
  data-part="trigger"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={(e) => {
  ctx.onOpen?.();
  onclick?.(e);
}}
  type="button"
>
  {@render children?.()}
</Ark>
