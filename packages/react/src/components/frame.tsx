import { ark } from "@ark-ui/react/factory";
import type { FrameProps as BaseFrameRootProps } from "@pisagor/props";
import { frameRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { SurfaceContext } from "./surface/surface.context";

// #region Context
const {
  Context: FrameStylesContext,
  useStyles: useFrame,
  withContext,
} = createSlotRecipeContext({
  name: "Frame",
  recipe: frameRecipe,
});
// #endregion

// #region Parts
export function FrameRoot({
  children,
  recipe = frameRecipe,
  className,
  ...rest
}: ComponentProps<typeof ark.div> & BaseFrameRootProps) {
  const slots = recipe();

  return (
    <SurfaceContext value={{ depth: 0, variant: "secondary" }}>
      <FrameStylesContext value={{ slots, variants: {} as never }}>
        <ark.div
          {...rest}
          className={slots.base({ className })}
          data-part="root"
          data-scope="frame"
        >
          {children}
        </ark.div>
      </FrameStylesContext>
    </SurfaceContext>
  );
}

export function FramePanel({
  children,
  className,
  ...rest
}: ComponentProps<typeof ark.div>) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panel({ className })}
      data-part="panel"
      data-scope="frame"
    >
      <SurfaceContext value={{ depth: 1, variant: "default" }}>
        {children}
      </SurfaceContext>
    </ark.div>
  );
}

export const FrameHeader = withContext(ark.header, {
  defaultProps: {
    "data-part": "panel-header",
  },
  name: "Header",
  slot: "panelHeader",
});

export const FrameTitle = withContext(ark.div, {
  defaultProps: {
    "data-part": "panel-title",
  },
  name: "Title",
  slot: "panelTitle",
});

export const FrameDescription = withContext(ark.div, {
  defaultProps: {
    "data-part": "panel-description",
  },
  name: "Description",
  slot: "panelDescription",
});

export const FrameFooter = withContext(ark.footer, {
  defaultProps: {
    "data-part": "panel-footer",
  },
  name: "Footer",
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
