<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { FrameProps as BaseFrameProps } from "@pisagor/props";
import { frameRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setSurfaceContext } from "../surface/surface.context";
import { setFrameContext } from "./frame.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseFrameProps;

let {
  children,
  recipe = frameRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setSurfaceContext({ depth: 0, variant: "secondary" });
setFrameContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="frame"
>
  {@render children?.()}
</Ark>
