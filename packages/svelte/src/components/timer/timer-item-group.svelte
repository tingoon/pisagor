<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { TimerItemGroupProps as BaseTimerItemGroupProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { withTimerItemGroupProvider } from "./timer.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  /**
   * The orientation of the timer item group.
   *
   * @defaultValue "vertical"
   */
  orientation?: "horizontal" | "vertical";
} & BaseTimerItemGroupProps;

let { orientation = "vertical", children, ...rest }: Props = $props();
const root = withTimerItemGroupProvider(() => rest, {
  name: "ItemGroup",
  slot: "base",
});
</script>

<Ark
  as="div"
  {...root.props}
  data-orientation={orientation}
  data-part="item-group"
>
  {@render children?.()}
</Ark>
