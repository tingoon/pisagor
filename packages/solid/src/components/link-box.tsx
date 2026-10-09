import { ark } from "@ark-ui/solid/factory";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
// #endregion

// #region Types
export interface LinkBoxRootProps
  extends ComponentProps<typeof ark.div>,
    BaseLinkBoxRootProps {}

export type LinkOverlayLinkProps = ComponentProps<typeof ark.a>;
// #endregion

// #region Parts
export const LinkBoxRoot: Component<LinkBoxRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const LinkOverlayLink = withContext(ark.a, {
  name: "Overlay",
  slot: "overlay",
});
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
