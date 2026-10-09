import { ark } from "@ark-ui/solid/factory";
import type { FrameProps as BaseFrameRootProps } from "@pisagor/props";
import { frameRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
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

// #region Types
export interface FrameRootProps
  extends ComponentProps<typeof ark.div>,
    BaseFrameRootProps {}

export type FramePanelProps = ComponentProps<typeof ark.div>;
export type FrameHeaderProps = ComponentProps<typeof ark.header>;
export type FrameTitleProps = ComponentProps<typeof ark.div>;
export type FrameDescriptionProps = ComponentProps<typeof ark.div>;
export type FrameFooterProps = ComponentProps<typeof ark.footer>;
// #endregion

// #region Parts
export function FrameRoot(props: FrameRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = createMemo(() => (local.recipe ?? frameRecipe)());

  return (
    <SurfaceContext value={{ depth: 0, variant: "secondary" }}>
      <FrameStylesContext
        value={{
          get slots() {
            return slots();
          },
          variants: {},
        }}
      >
        <ark.div
          {...rest}
          class={slots().base({ class: local.class })}
          data-part="root"
          data-scope="frame"
        >
          {local.children}
        </ark.div>
      </FrameStylesContext>
    </SurfaceContext>
  );
}

export function FramePanel(props: FramePanelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useFrame();

  return (
    <ark.div
      {...rest}
      class={styles.slots.panel({ class: local.class })}
      data-part="panel"
      data-scope="frame"
    >
      <SurfaceContext value={{ depth: 1, variant: "default" }}>
        {local.children}
      </SurfaceContext>
    </ark.div>
  );
}

export const FrameHeader = withContext(ark.header, {
  defaultProps: { "data-part": "panel-header" },
  name: "Header",
  slot: "panelHeader",
});

export const FrameTitle = withContext(ark.div, {
  defaultProps: { "data-part": "panel-title" },
  name: "Title",
  slot: "panelTitle",
});

export const FrameDescription = withContext(ark.div, {
  defaultProps: { "data-part": "panel-description" },
  name: "Description",
  slot: "panelDescription",
});

export const FrameFooter = withContext(ark.footer, {
  defaultProps: { "data-part": "panel-footer" },
  name: "Footer",
  slot: "panelFooter",
});
// #endregion

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
