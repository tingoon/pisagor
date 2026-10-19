<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { ButtonRootContract } from "@pisagor/contracts";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { useSidebar } from "./sidebar.context";

  type Props = HTMLAnchorAttributes & {
    children?: import("svelte").Snippet;
    isActive?: boolean;
    /**
     * Button style recipe. Defaults to `buttonRecipe` from
     * `@pisagor/recipes/button`.
     *
     * @defaultValue buttonRecipe
     */
    buttonRecipe?: typeof buttonRecipe;
  } & ButtonRootContract;

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
