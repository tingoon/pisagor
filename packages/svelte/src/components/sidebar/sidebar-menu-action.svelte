<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLButtonAttributes, "class" | "type"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  showOnHover?: boolean;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
  type?: HTMLButtonAttributes["type"];
};

let {
  showOnHover = false,
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
  ctx.slots.menuAction(),
  !showOnHover &&
    "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-accent-foreground md:opacity-0",
  className,
)}
  data-part="menu-action"
  data-scope="sidebar"
  data-sidebar="menu-action"
  {type}
>
  {@render children?.()}
</Ark>
