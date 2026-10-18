import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { Component } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
// #endregion

// #region Types
export interface LinkBoxRootProps
  extends HTMLArkProps<"div">, BaseLinkBoxRootProps {}

export type LinkOverlayLinkProps = HTMLArkProps<"a">;
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
