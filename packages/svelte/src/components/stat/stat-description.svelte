<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useStat } from "./stat.context";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useStat();
</script>

<Ark
  as="p"
  {...rest}
  class={slots.description({ class: cn(className) })}
  data-part="description"
  data-scope="stat"
>
  {@render children?.()}
</Ark>
