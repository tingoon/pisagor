import { ark } from "@ark-ui/react/factory";
import { frameVariants } from "@pisagor/recipes/frame";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { FrameContext, useFrame } from "./frame.context";

// #region Types
export interface FrameHeaderProps extends ComponentProps<typeof ark.header> {}

export interface FrameRootProps extends ComponentProps<typeof ark.div> {}

export interface FramePanelProps extends ComponentProps<typeof ark.div> {}

export interface FrameTitleProps extends ComponentProps<typeof ark.div> {}

export interface FrameDescriptionProps extends ComponentProps<typeof ark.div> {}

export interface FrameFooterProps extends ComponentProps<typeof ark.footer> {}
// #endregion

// #region Parts
export function FrameRoot({ children, className, ...rest }: FrameRootProps) {
  const slots = useMemo(() => frameVariants(), []);

  return (
    <FrameContext value={{ slots }}>
      <ark.div {...rest} className={slots.base({ className })} data-part="root" data-scope="frame">
        {children}
      </ark.div>
    </FrameContext>
  );
}

export function FramePanel({ children, className, ...rest }: FramePanelProps) {
  const { slots } = useFrame();

  return (
    <ark.div {...rest} className={slots.panel({ className })} data-part="panel" data-scope="frame">
      {children}
    </ark.div>
  );
}

export function FrameHeader({ children, className, ...rest }: FrameHeaderProps) {
  const { slots } = useFrame();

  return (
    <ark.header
      {...rest}
      className={slots.panelHeader({ className })}
      data-part="panel-header"
      data-scope="frame"
    >
      {children}
    </ark.header>
  );
}

export function FrameTitle({ children, className, ...rest }: FrameTitleProps) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panelTitle({ className })}
      data-part="panel-title"
      data-scope="frame"
    >
      {children}
    </ark.div>
  );
}

export function FrameDescription({ children, className, ...rest }: FrameDescriptionProps) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panelDescription({ className })}
      data-part="panel-description"
      data-scope="frame"
    >
      {children}
    </ark.div>
  );
}

export function FrameFooter({ children, className, ...rest }: FrameFooterProps) {
  const { slots } = useFrame();

  return (
    <ark.footer
      {...rest}
      className={slots.panelFooter({ className })}
      data-part="panel-footer"
      data-scope="frame"
    >
      {children}
    </ark.footer>
  );
}
// #endregion

// #region Display Names
FrameRoot.displayName = "Frame";
FramePanel.displayName = "Frame.Panel";
FrameHeader.displayName = "Frame.Header";
FrameTitle.displayName = "Frame.Title";
FrameDescription.displayName = "Frame.Description";
FrameFooter.displayName = "Frame.Footer";
// #endregion
