import { ark } from "@ark-ui/vue";
import type { LinkBoxRootContract } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";

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
export type LinkBoxRootProps = LinkBoxRootContract & { class?: unknown };
export type LinkOverlayLinkProps = { class?: unknown };
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
