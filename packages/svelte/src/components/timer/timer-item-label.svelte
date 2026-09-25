<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useTimerItemGroup } from "./timer.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTimerItemGroup();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.label({ class: cn(className) })}
  data-part="item-label"
  data-scope="timer"
>
  {@render children?.()}
</Ark>
