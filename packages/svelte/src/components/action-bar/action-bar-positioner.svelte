<script lang="ts">
  import { Presence } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useActionBar } from "./action-bar.context";

  let {
    class: className,
    style,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
  const ctx = useActionBar();
  const placement = $derived(ctx.positioning.placement);
  const gutter = $derived(ctx.positioning.gutter);
  const mergedStyle = $derived(
    [gutter ? `--gutter: ${gutter}` : undefined, style]
      .filter(Boolean)
      .join("; ") || undefined,
  );
</script>

<Presence
  {...rest}
  class={ctx.slots.positioner({ class: cn(className), placement })}
  data-part="positioner"
  data-placement={placement}
  data-scope="action-bar"
  lazyMount={ctx.lazyMount}
  present={ctx.isOpen}
  style={mergedStyle}
  unmountOnExit={ctx.unmountOnExit}
>
  {@render children?.()}
</Presence>
