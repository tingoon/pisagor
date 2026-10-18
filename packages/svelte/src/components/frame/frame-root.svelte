<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { FrameProps as BaseFrameProps } from "@pisagor/props";
  import { frameRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import type { SizeScaleProps } from "../../internal/types";
  import { setSurfaceContext } from "../surface/surface.context";
  import { Context } from "./frame.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & BaseFrameProps &
    SizeScaleProps;

  let {
    children,
    size = "md",
    recipe = frameRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe({ size }));

  setSurfaceContext({ depth: 0, variant: "secondary" });
  Context.set({
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
