import { ark } from "@ark-ui/react/factory";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
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
}) as FunctionComponent<ComponentProps<typeof ark.div> & BaseLinkBoxRootProps>;

export const LinkOverlayLink = withContext(ark.a, {
  name: "Overlay",
  slot: "overlay",
});
// #endregion

// #region Types
export type LinkBoxRootProps = ComponentProps<typeof LinkBoxRoot>;
export type LinkOverlayLinkProps = ComponentProps<typeof LinkOverlayLink>;
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
