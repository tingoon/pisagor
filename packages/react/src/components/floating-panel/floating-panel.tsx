import { ark } from "@ark-ui/react/factory";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { ArrowsOutIcon, CornersInIcon, MinusIcon } from "@phosphor-icons/react";
import {
  floatingPanelBodyVariants,
  floatingPanelContentVariants,
  floatingPanelFooterVariants,
  floatingPanelInline2Variants,
  floatingPanelInline3Variants,
  floatingPanelInline4Variants,
  floatingPanelInlineVariants,
  floatingPanelPositionerVariants,
  floatingPanelTitleVariants,
} from "@pisagor/styles/ui/floating-panel";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Button, type ButtonProps } from "../button";
import { ScrollArea } from "../scroll-area";

// #region Types
interface FloatingPanelRootProps
  extends ComponentProps<typeof FloatingPanelPrimitive.Root>,
    WithTestId {}

interface FloatingPanelContentProps extends ComponentProps<typeof FloatingPanelPrimitive.Content> {
  /**
   * Whether to enable a resizable panel.
   *
   * @defaultValue true
   */
  resizable?: boolean;
}

interface FloatingPanelHeaderProps extends ComponentProps<typeof FloatingPanelPrimitive.Header> {
  /** Renders FloatingPanel.Title with the provided text */
  title?: string;
}

interface FloatingPanelStageTriggerProps
  extends Omit<ComponentProps<typeof FloatingPanelPrimitive.StageTrigger>, "stage">,
    ButtonProps {}

interface FloatingPanelBodyProps extends ComponentProps<typeof FloatingPanelPrimitive.Body> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}
// #endregion

// #region Context
const [FloatingPanelRootContext, useFloatingPanelRoot] = createContext<{ testId?: string }>({
  name: "FloatingPanelRoot",
  strict: false,
});

// #endregion

// #region Components
export function FloatingPanelRoot({
  lazyMount = true,
  unmountOnExit = true,
  testId,
  ...rest
}: FloatingPanelRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <FloatingPanelRootContext value={{ testId: dataTestId ?? testId }}>
      <FloatingPanelPrimitive.Root lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
    </FloatingPanelRootContext>
  );
}
FloatingPanelRoot.displayName = "FloatingPanel";

export function FloatingPanelTrigger(props: ComponentProps<typeof FloatingPanelPrimitive.Trigger>) {
  return <FloatingPanelPrimitive.Trigger {...props} />;
}
FloatingPanelTrigger.displayName = "FloatingPanel.Trigger";

export function FloatingPanelContent({
  resizable = true,
  className,
  children,
  ...rest
}: FloatingPanelContentProps) {
  const { testId } = useFloatingPanelRoot() ?? {};

  return (
    <Portal>
      <FloatingPanelPrimitive.Positioner className={floatingPanelPositionerVariants()}>
        <FloatingPanelPrimitive.Content
          {...rest}
          className={cn(floatingPanelContentVariants(), className)}
          data-testid={testId}
        >
          {children}

          {resizable && (
            <>
              <FloatingPanelResizeTrigger axis="n" />
              <FloatingPanelResizeTrigger axis="e" />
              <FloatingPanelResizeTrigger axis="w" />
              <FloatingPanelResizeTrigger axis="s" />
              <FloatingPanelResizeTrigger axis="ne" />
              <FloatingPanelResizeTrigger axis="se" />
              <FloatingPanelResizeTrigger axis="sw" />
              <FloatingPanelResizeTrigger axis="nw" />
            </>
          )}
        </FloatingPanelPrimitive.Content>
      </FloatingPanelPrimitive.Positioner>
    </Portal>
  );
}
FloatingPanelContent.displayName = "FloatingPanel.Content";

export function FloatingPanelDragTrigger(
  props: ComponentProps<typeof FloatingPanelPrimitive.DragTrigger>,
) {
  return <FloatingPanelPrimitive.DragTrigger {...props} />;
}
FloatingPanelDragTrigger.displayName = "FloatingPanel.DragTrigger";

export function FloatingPanelHeader({
  className,
  title,
  children,
  ...rest
}: FloatingPanelHeaderProps) {
  return (
    <FloatingPanelDragTrigger>
      <FloatingPanelPrimitive.Header
        {...rest}
        className={cn(floatingPanelInlineVariants(), className)}
      >
        {title && <FloatingPanelTitle>{title}</FloatingPanelTitle>}

        {children}
      </FloatingPanelPrimitive.Header>
    </FloatingPanelDragTrigger>
  );
}
FloatingPanelHeader.displayName = "FloatingPanel.Header";

export function FloatingPanelControl({
  className,
  ...rest
}: ComponentProps<typeof FloatingPanelPrimitive.Control>) {
  return (
    <FloatingPanelPrimitive.Control
      {...rest}
      className={cn(floatingPanelInline2Variants(), className)}
    />
  );
}
FloatingPanelControl.displayName = "FloatingPanel.Control";

export function FloatingPanelMinimize({
  size = "icon-xs",
  variant = "ghost",
  ...rest
}: FloatingPanelStageTriggerProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="minimized">
      <Button aria-label="Minimize" size={size} variant={variant}>
        <MinusIcon />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}
FloatingPanelMinimize.displayName = "FloatingPanel.Minimize";

export function FloatingPanelMaximize({
  size = "icon-xs",
  variant = "ghost",
  ...rest
}: FloatingPanelStageTriggerProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="maximized">
      <Button aria-label="Maximize" size={size} variant={variant}>
        <ArrowsOutIcon />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}
FloatingPanelMaximize.displayName = "FloatingPanel.Maximize";

export function FloatingPanelRestore({
  size = "icon-xs",
  variant = "outline",
  ...rest
}: FloatingPanelStageTriggerProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="default">
      <Button aria-label="Restore" size={size} variant={variant}>
        <CornersInIcon className={floatingPanelInline3Variants()} />
        <ArrowsOutIcon className={floatingPanelInline4Variants()} />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}
FloatingPanelRestore.displayName = "FloatingPanel.Restore";

export function FloatingPanelTitle({
  className,
  ...rest
}: ComponentProps<typeof FloatingPanelPrimitive.Title>) {
  return (
    <FloatingPanelPrimitive.Title
      {...rest}
      className={cn(floatingPanelTitleVariants(), className)}
    />
  );
}
FloatingPanelTitle.displayName = "FloatingPanel.Title";

export function FloatingPanelResizeTrigger(
  props: ComponentProps<typeof FloatingPanelPrimitive.ResizeTrigger>,
) {
  return <FloatingPanelPrimitive.ResizeTrigger {...props} />;
}
FloatingPanelResizeTrigger.displayName = "FloatingPanel.ResizeTrigger";

export function FloatingPanelStageTrigger(
  props: ComponentProps<typeof FloatingPanelPrimitive.StageTrigger>,
) {
  return <FloatingPanelPrimitive.StageTrigger {...props} />;
}
FloatingPanelStageTrigger.displayName = "FloatingPanel.StageTrigger";

export function FloatingPanelCloseTrigger(
  props: ComponentProps<typeof FloatingPanelPrimitive.CloseTrigger>,
) {
  return <FloatingPanelPrimitive.CloseTrigger {...props} />;
}
FloatingPanelCloseTrigger.displayName = "FloatingPanel.CloseTrigger";

export function FloatingPanelBody({
  scrollFade = false,
  className,
  children,
  ...rest
}: FloatingPanelBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <FloatingPanelPrimitive.Body {...rest} className={cn(floatingPanelBodyVariants(), className)}>
        {children}
      </FloatingPanelPrimitive.Body>
    </ScrollArea>
  );
}
FloatingPanelBody.displayName = "FloatingPanel.Body";

export function FloatingPanelFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(floatingPanelFooterVariants(), className)}
      data-part="footer"
      data-scope="floating-panel"
    />
  );
}
FloatingPanelFooter.displayName = "FloatingPanel.Footer";

// #endregion
