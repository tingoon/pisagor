<script lang="ts">
  import { Ark, type DialogTriggerProps } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { useActionBar } from "./action-bar.context";

  type Props = HTMLButtonAttributes & {
    /** Render your own element; spread `props()` onto it. */
    asChild?: DialogTriggerProps["asChild"];
  };

  let { onclick, class: className, children, ...rest }: Props = $props();
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
  class={ctx.slots.trigger({ class: cn(className) })}
  data-part="trigger"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
