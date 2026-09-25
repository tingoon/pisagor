import { ark } from "@ark-ui/solid/factory";
import { frameRecipe } from "@pisagor/recipes/frame";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { SurfaceContext } from "../surface/surface.context";
import { FrameContext, useFrame } from "./frame.context";

export type FrameHeaderProps = ComponentProps<typeof ark.header>;

export interface FrameRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof frameRecipe;
}

export type FramePanelProps = ComponentProps<typeof ark.div>;
export type FrameTitleProps = ComponentProps<typeof ark.div>;
export type FrameDescriptionProps = ComponentProps<typeof ark.div>;
export type FrameFooterProps = ComponentProps<typeof ark.footer>;

export function FrameRoot(props: FrameRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? frameRecipe)();

  return (
    <SurfaceContext value={{ depth: 0, variant: "secondary" }}>
      <FrameContext value={{ slots: slots() }}>
        <ark.div
          {...rest}
          class={slots().base({ class: cn(local.class) })}
          data-part="root"
          data-scope="frame"
        >
          {local.children}
        </ark.div>
      </FrameContext>
    </SurfaceContext>
  );
}

export function FramePanel(props: FramePanelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      class={slots.panel({ class: cn(local.class) })}
      data-part="panel"
      data-scope="frame"
    >
      <SurfaceContext value={{ depth: 1, variant: "default" }}>
        {local.children}
      </SurfaceContext>
    </ark.div>
  );
}

export function FrameHeader(props: FrameHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFrame();

  return (
    <ark.header
      {...rest}
      class={slots.panelHeader({ class: cn(local.class) })}
      data-part="panel-header"
      data-scope="frame"
    >
      {local.children}
    </ark.header>
  );
}

export function FrameTitle(props: FrameTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      class={slots.panelTitle({ class: cn(local.class) })}
      data-part="panel-title"
      data-scope="frame"
    >
      {local.children}
    </ark.div>
  );
}

export function FrameDescription(props: FrameDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      class={slots.panelDescription({ class: cn(local.class) })}
      data-part="panel-description"
      data-scope="frame"
    >
      {local.children}
    </ark.div>
  );
}

export function FrameFooter(props: FrameFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useFrame();

  return (
    <ark.footer
      {...rest}
      class={slots.panelFooter({ class: cn(local.class) })}
      data-part="panel-footer"
      data-scope="frame"
    >
      {local.children}
    </ark.footer>
  );
}
