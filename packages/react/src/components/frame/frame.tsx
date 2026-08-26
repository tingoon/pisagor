import { ark } from "@ark-ui/react/factory";
import { frameVariants } from "@pisagor/styles/ui/frame";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { WithTestId } from "../../internal/types";
import { FrameContext, useFrame } from "./frame.context";

// #region Types
export interface FrameHeaderProps extends ComponentProps<typeof ark.header> {
  /** The description of the dialog */
  description?: string;
  /** The title of the dialog */
  title?: string;
}

export interface FrameRootProps extends ComponentProps<typeof ark.div>, WithTestId {}

export interface FramePanelProps extends ComponentProps<typeof ark.div> {}

export interface FrameTitleProps extends ComponentProps<typeof ark.div> {}

export interface FrameDescriptionProps extends ComponentProps<typeof ark.div> {}

export interface FrameFooterProps extends ComponentProps<typeof ark.footer> {}
// #endregion

// #region Parts
export function FrameRoot({ className, children, testId, ...rest }: FrameRootProps) {
  const slots = useMemo(() => frameVariants(), []);

  return (
    <FrameContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="frame"
        data-testid={testId}
      >
        {children}
      </ark.div>
    </FrameContext>
  );
}

export function FramePanel({ className, ...rest }: FramePanelProps) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panel({ className })}
      data-part="panel"
      data-scope="frame"
    />
  );
}

export function FrameHeader({
  title,
  description,
  className,
  children,
  ...rest
}: FrameHeaderProps) {
  const { slots } = useFrame();

  return (
    <ark.header
      {...rest}
      className={slots.panelHeader({ className })}
      data-part="panel-header"
      data-scope="frame"
    >
      {!!title && <FrameTitle>{title}</FrameTitle>}

      {!!description && <FrameDescription>{description}</FrameDescription>}

      {children}
    </ark.header>
  );
}

export function FrameTitle({ className, ...rest }: FrameTitleProps) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panelTitle({ className })}
      data-part="panel-title"
      data-scope="frame"
    />
  );
}

export function FrameDescription({ className, ...rest }: FrameDescriptionProps) {
  const { slots } = useFrame();

  return (
    <ark.div
      {...rest}
      className={slots.panelDescription({ className })}
      data-part="panel-description"
      data-scope="frame"
    />
  );
}

export function FrameFooter({ className, ...rest }: FrameFooterProps) {
  const { slots } = useFrame();

  return (
    <ark.footer
      {...rest}
      className={slots.panelFooter({ className })}
      data-part="panel-footer"
      data-scope="frame"
    />
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
