import type { FrameRootContract } from "@pisagor/contracts";
import { frameRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal";
import { SurfaceContext } from "./surface/surface.context";

// #region Context
const {
  Context: FrameStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Frame",
  recipe: frameRecipe,
});
// #endregion

// #region Parts
export function FrameRoot({
  size = "md",
  children,
  recipe = frameRecipe,
  className,
  ...rest
}: ComponentProps<"div"> & FrameRootContract) {
  const slots = recipe({ size });

  return (
    <SurfaceContext value={{ depth: 0, variant: "secondary" }}>
      <FrameStylesContext value={{ slots, variants: {} as never }}>
        <div
          {...rest}
          className={slots.base({ className })}
          data-part="root"
          data-scope="frame"
        >
          {children}
        </div>
      </FrameStylesContext>
    </SurfaceContext>
  );
}

export function FramePanel({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.panel({ className })}
      data-part="panel"
      data-scope="frame"
    >
      <SurfaceContext value={{ depth: 1, variant: "default" }}>
        {children}
      </SurfaceContext>
    </div>
  );
}

export const FrameHeader = withContext<ComponentProps<"header">>("header", {
  name: "Header",
  part: "panel-header",
  slot: "panelHeader",
});

export const FrameTitle = withContext<ComponentProps<"div">>("div", {
  name: "Title",
  part: "panel-title",
  slot: "panelTitle",
});

export const FrameDescription = withContext<ComponentProps<"div">>("div", {
  name: "Description",
  part: "panel-description",
  slot: "panelDescription",
});

export const FrameFooter = withContext<ComponentProps<"footer">>("footer", {
  name: "Footer",
  part: "panel-footer",
  slot: "panelFooter",
});
// #endregion

// #region Types
export type FrameRootProps = ComponentProps<typeof FrameRoot>;
export type FramePanelProps = ComponentProps<typeof FramePanel>;
export type FrameHeaderProps = ComponentProps<typeof FrameHeader>;
export type FrameTitleProps = ComponentProps<typeof FrameTitle>;
export type FrameDescriptionProps = ComponentProps<typeof FrameDescription>;
export type FrameFooterProps = ComponentProps<typeof FrameFooter>;
// #endregion

FrameRoot.displayName = "Frame";
FramePanel.displayName = "Frame.Panel";

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
