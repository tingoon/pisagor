import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { LinkBoxRootContract } from "@pisagor/contracts";
import { linkBoxRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
// #endregion

// #region Types
export type LinkBoxRootProps = HTMLArkProps<"div"> & LinkBoxRootContract;

export type LinkOverlayLinkProps = HTMLArkProps<"a">;
// #endregion

// #region Parts
export const LinkBoxRoot: Component<LinkBoxRootProps> = withProvider<
  ComponentProps<typeof ark.div> & LinkBoxRootContract
>(ark.div, { name: "Root" });

export const LinkOverlayLink = withContext<ComponentProps<typeof ark.a>>(
  ark.a,
  { name: "Overlay" },
);
// #endregion

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlayLink,
});
