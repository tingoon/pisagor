<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useStat } from "./stat.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useStat();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.label({ class: cn(className) })}
  data-part="label"
  data-scope="stat"
>
  {@render children?.()}
</Ark>
