import { ark } from "@ark-ui/react/factory";
import {
  framePanelDescriptionVariants,
  framePanelFooterVariants,
  framePanelHeaderVariants,
  framePanelTitleVariants,
  framePanelVariants,
  frameVariants,
} from "@pisagor/styles/ui/frame";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

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
export function FrameRoot({ className, testId, ...rest }: FrameRootProps) {
  return (
    <ark.div
      {...rest}
      className={frameVariants({ className })}
      data-part="root"
      data-scope="frame"
      data-testid={testId}
    />
  );
}

export function FramePanel({ className, ...rest }: FramePanelProps) {
  return (
    <ark.div
      {...rest}
      className={framePanelVariants({ className })}
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
  return (
    <ark.header
      {...rest}
      className={framePanelHeaderVariants({ className })}
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
  return (
    <ark.div
      {...rest}
      className={framePanelTitleVariants({ className })}
      data-part="panel-title"
      data-scope="frame"
    />
  );
}

export function FrameDescription({ className, ...rest }: FrameDescriptionProps) {
  return (
    <ark.div
      {...rest}
      className={framePanelDescriptionVariants({ className })}
      data-part="panel-description"
      data-scope="frame"
    />
  );
}

export function FrameFooter({ className, ...rest }: FrameFooterProps) {
  return (
    <ark.footer
      {...rest}
      className={framePanelFooterVariants({ className })}
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
