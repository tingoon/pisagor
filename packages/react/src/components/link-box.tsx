import { ark, type HTMLArkProps } from "@ark-ui/react";
import type { LinkBoxProps as BaseLinkBoxRootProps } from "@pisagor/props";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, RefAttributes } from "react";
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
}) as FunctionComponent<
  HTMLArkProps<"div"> & RefAttributes<HTMLDivElement> & BaseLinkBoxRootProps
>;

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
