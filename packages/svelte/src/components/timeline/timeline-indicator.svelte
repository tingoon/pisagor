<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useTimelineItem } from "./timeline.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimelineItem();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.indicator({ class: className })}
  data-part="indicator"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
