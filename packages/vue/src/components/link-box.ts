import { ark } from "@ark-ui/vue/factory";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
// #endregion

// #region Parts
export const LinkBoxRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const LinkOverlayLink = withContext(ark.a, {
  name: "Overlay",
  slot: "overlay",
});
// #endregion

// #region Types
export type LinkBoxRootProps = BaseLinkBoxRootProps & { class?: unknown };
export type LinkOverlayLinkProps = { class?: unknown };
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
