<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLButtonAttributes, "class" | "type"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
  type?: HTMLButtonAttributes["type"];
};

let {
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  class: className,
  children,
  type = "button",
  ...rest
}: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="button"
  {...rest}
  class={cn(
  buttonRecipeProp({
    clickEffect: false,
    size: "icon-xs",
    variant: "ghost",
  }).base(),
  ctx.slots.groupAction(),
  className,
)}
  data-part="group-action"
  data-scope="sidebar"
  data-sidebar="group-action"
  {type}
>
  {@render children?.()}
</Ark>
