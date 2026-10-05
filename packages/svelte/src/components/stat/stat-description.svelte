<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useStat } from "./stat.context";

type Props = Omit<HTMLAttributes<HTMLParagraphElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useStat();
</script>

<Ark
  as="p"
  {...rest}
  class={slots.description({ class: className })}
  data-part="description"
  data-scope="stat"
>
  {@render children?.()}
</Ark>
