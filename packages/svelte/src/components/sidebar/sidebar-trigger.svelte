<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useSidebar } from "./sidebar.context";

  type Props = Omit<ComponentProps<typeof Button>, "size" | "variant"> & {
    size?: ComponentProps<typeof Button>["size"];
    variant?: ComponentProps<typeof Button>["variant"];
  };

  /**
   * Toggles the sidebar; localized default `aria-label`. Pass your own icon as
   * children.
   */
  let {
    "aria-label": ariaLabel,
    class: className,
    onclick,
    children,
    size = "icon-md",
    variant = "ghost",
    ...rest
  }: Props = $props();

  const { m } = useLocale();
  const ctx = useSidebar();

  function handleClick(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
  ) {
    onclick?.(event);
    ctx.toggleSidebar();
  }
</script>

<Button
  aria-label={ariaLabel ?? m("sidebar.toggle")}
  {...rest}
  class={ctx.slots.trigger({ class: cn(className) })}
  data-part="trigger"
  data-scope="sidebar"
  data-sidebar="trigger"
  onclick={handleClick}
  {size}
  {variant}
>
  {@render children?.()}
</Button>
