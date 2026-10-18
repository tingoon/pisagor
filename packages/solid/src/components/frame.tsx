import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { FrameProps as BaseFrameRootProps } from "@pisagor/props";
import { frameRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { type SizeScaleProps, createSlotRecipeContext } from "../internal";
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
  extends HTMLArkProps<"div">, BaseFrameRootProps, SizeScaleProps {}

export type FramePanelProps = HTMLArkProps<"div">;
export type FrameHeaderProps = HTMLArkProps<"header">;
export type FrameTitleProps = HTMLArkProps<"div">;
export type FrameDescriptionProps = HTMLArkProps<"div">;
export type FrameFooterProps = HTMLArkProps<"footer">;
// #endregion

// #region Parts
export function FrameRoot(props: FrameRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "recipe",
    "size",
    "class",
  ]);
  const slots = createMemo(() =>
    (local.recipe ?? frameRecipe)({ size: local.size ?? "md" }),
  );

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
