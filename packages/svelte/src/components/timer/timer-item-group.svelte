<script lang="ts">
  import type { TimerItemGroupRootContract } from "@pisagor/props";
  import type { HTMLAttributes } from "svelte/elements";
  import { withTimerItemGroupProvider } from "./timer.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    /**
     * The orientation of the timer item group.
     *
     * @defaultValue "vertical"
     */
    orientation?: "horizontal" | "vertical";
  } & TimerItemGroupRootContract;

  let { orientation = "vertical", children, ...rest }: Props = $props();
  const root = withTimerItemGroupProvider(() => rest, {
    name: "ItemGroup",
    slot: "base",
  });
</script>

<div {...root.props} data-orientation={orientation} data-part="item-group">
  {@render children?.()}
</div>
