<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ButtonVariantProps } from "@pisagor/recipes/button";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAnchorAttributes, "class"> &
  ButtonVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    isActive?: boolean;
    /**
     * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
     * @defaultValue buttonRecipe
     */
    buttonRecipe?: typeof buttonRecipe;
  };

let {
  size = "md",
  isActive = false,
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="a"
  {...rest}
  class={cn(
  buttonRecipeProp({ clickEffect: false, size, variant: "ghost" }).base(),
  ctx.slots.menuSubButton(),
  className,
)}
  data-active={isActive}
  data-part="menu-sub-button"
  data-scope="sidebar"
  data-sidebar="menu-sub-button"
  data-size={size}
>
  {@render children?.()}
</Ark>
