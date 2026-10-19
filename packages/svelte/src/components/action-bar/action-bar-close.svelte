<script lang="ts">
  import { Ark, type DialogTriggerProps } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { useActionBar } from "./action-bar.context";

  const { m } = useLocale();

  type Props = HTMLButtonAttributes & {
    /** Render your own element; spread `props()` onto it. */
    asChild?: DialogTriggerProps["asChild"];
  };

  let { onclick, class: className, children, ...rest }: Props = $props();
  const ctx = useActionBar();

  function handleClick(
    e: Parameters<NonNullable<HTMLButtonAttributes["onclick"]>>[0],
  ) {
    ctx.onClose?.();
    onclick?.(e);
  }
</script>

<Ark
  aria-label={m("actionBar.close")}
  as="button"
  {...rest}
  class={ctx.slots.close({ class: cn(className) })}
  data-part="close"
  data-scope="action-bar"
  data-state={ctx.isOpen ? "open" : "closed"}
  onclick={handleClick}
  type="button"
>
  {@render children?.()}
</Ark>
