<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFrame } from "./frame.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useFrame();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.panelTitle({ class: cn(className) })}
  data-part="panel-title"
  data-scope="frame"
>
  {@render children?.()}
</Ark>
