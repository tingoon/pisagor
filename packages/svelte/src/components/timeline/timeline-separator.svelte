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
  aria-hidden="true"
  class={slots.separator({ class: className })}
  data-part="separator"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
