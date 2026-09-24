<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { frameRecipe } from "@pisagor/recipes/frame";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setSurfaceContext } from "../surface/surface.context";
import { setFrameContext } from "./frame.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof frameRecipe;
};

let { children, recipe = frameRecipe, class: className, ...rest }: Props = $props();

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
