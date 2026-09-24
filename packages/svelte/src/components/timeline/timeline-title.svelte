<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useTimelineItem } from "./timeline.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimelineItem();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.title({ class: cn(className) })}
  data-part="title"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
