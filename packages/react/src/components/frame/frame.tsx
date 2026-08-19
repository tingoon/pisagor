import { ark } from "@ark-ui/react/factory";
import {
  framePanelDescriptionVariants,
  framePanelFooterVariants,
  framePanelHeaderVariants,
  framePanelTitleVariants,
  framePanelVariants,
  frameVariants,
} from "@pisagor/styles/ui/frame";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface FrameHeaderProps extends ComponentProps<typeof ark.header> {
  /** The description of the dialog */
  description?: string;
  /** The title of the dialog */
  title?: string;
}

interface FrameRootProps extends ComponentProps<typeof ark.div>, WithTestId {}
// #endregion

// #region Components
export function FrameRoot({ className, testId, ...rest }: FrameRootProps) {
  return (
    <ark.div
      {...rest}
      className={cn(frameVariants(), className)}
      data-part="root"
      data-scope="frame"
      data-testid={testId}
    />
  );
}
FrameRoot.displayName = "Frame";

export function FramePanel({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(framePanelVariants(), className)}
      data-part="panel"
      data-scope="frame"
    />
  );
}
FramePanel.displayName = "Frame.Panel";

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
      className={cn(framePanelHeaderVariants(), className)}
      data-part="panel-header"
      data-scope="frame"
    >
      {!!title && <FrameTitle>{title}</FrameTitle>}

      {!!description && <FrameDescription>{description}</FrameDescription>}

      {children}
    </ark.header>
  );
}
FrameHeader.displayName = "Frame.Header";

export function FrameTitle({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(framePanelTitleVariants(), className)}
      data-part="panel-title"
      data-scope="frame"
    />
  );
}
FrameTitle.displayName = "Frame.Title";

export function FrameDescription({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(framePanelDescriptionVariants(), className)}
      data-part="panel-description"
      data-scope="frame"
    />
  );
}
FrameDescription.displayName = "Frame.Description";

export function FrameFooter({ className, ...rest }: ComponentProps<typeof ark.footer>) {
  return (
    <ark.footer
      {...rest}
      className={cn(framePanelFooterVariants(), className)}
      data-part="panel-footer"
      data-scope="frame"
    />
  );
}
FrameFooter.displayName = "Frame.Footer";

// #endregion
