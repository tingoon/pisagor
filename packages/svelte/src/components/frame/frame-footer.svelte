<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFrame } from "./frame.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useFrame();
</script>

<Ark
  as="footer"
  {...rest}
  class={slots.panelFooter({ class: cn(className) })}
  data-part="panel-footer"
  data-scope="frame"
>
  {@render children?.()}
</Ark>
