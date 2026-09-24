<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { Portal } from "@ark-ui/svelte/portal";
import { Presence } from "@ark-ui/svelte/presence";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { "aria-labelledby": ariaLabelledby, class: className, children, ...rest }: Props = $props();
const ctx = useActionBar();
const placement = $derived(ctx.positioning.placement);
const gutter = $derived(ctx.positioning.gutter);
</script>

<Portal>
  <Presence
    class={ctx.slots.positioner({ placement })}
    data-part="positioner"
    data-placement={placement}
    data-scope="action-bar"
    lazyMount={ctx.lazyMount}
    present={ctx.isOpen}
    style={`--gutter: ${gutter}`}
    unmountOnExit={ctx.unmountOnExit}
  >
    <Ark
      as="div"
      {...rest}
      aria-labelledby={ariaLabelledby}
      class={ctx.slots.content({ class: cn(className) })}
      data-part="content"
      data-scope="action-bar"
      role="toolbar"
    >
      {@render children?.()}
    </Ark>
  </Presence>
</Portal>
