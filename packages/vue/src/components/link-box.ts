import { ark } from "@ark-ui/vue";
import type { LinkBoxRootContract } from "@pisagor/contracts";
import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
// #endregion

// #region Parts
export const LinkBoxRoot = withProvider<LinkBoxRootContract>(ark.div, {
  name: "Root",
});

export const LinkOverlayLink = withContext(ark.a, { name: "Overlay" });
// #endregion

// #region Types
export type LinkBoxRootProps = LinkBoxRootContract & { class?: unknown };
export type LinkOverlayLinkProps = { class?: unknown };
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
