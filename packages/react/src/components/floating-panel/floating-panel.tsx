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
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";
import { ScrollArea } from "../scroll-area";
import { FloatingPanelRootContext, useFloatingPanelRoot } from "./floating-panel.context";

// #region Types
export interface FloatingPanelRootProps
  extends ComponentProps<typeof FloatingPanelPrimitive.Root>,
    WithTestId {}

export interface FloatingPanelContentProps
  extends ComponentProps<typeof FloatingPanelPrimitive.Content> {
  /**
   * Whether to enable a resizable panel.
   *
   * @defaultValue true
   */
  resizable?: boolean;
}

export interface FloatingPanelHeaderProps
  extends ComponentProps<typeof FloatingPanelPrimitive.Header> {
  /** Renders FloatingPanel.Title with the provided text */
  title?: string;
}

export type FloatingPanelMinimizeProps = Omit<
  ComponentProps<typeof FloatingPanelPrimitive.StageTrigger>,
  "stage"
> &
  ButtonProps;

export type FloatingPanelMaximizeProps = FloatingPanelMinimizeProps;

export type FloatingPanelRestoreProps = FloatingPanelMinimizeProps;

export interface FloatingPanelBodyProps extends ComponentProps<typeof FloatingPanelPrimitive.Body> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export type FloatingPanelTriggerProps = ComponentProps<typeof FloatingPanelPrimitive.Trigger>;

export type FloatingPanelDragTriggerProps = ComponentProps<
  typeof FloatingPanelPrimitive.DragTrigger
>;

export type FloatingPanelControlProps = ComponentProps<typeof FloatingPanelPrimitive.Control>;

export type FloatingPanelTitleProps = ComponentProps<typeof FloatingPanelPrimitive.Title>;

export type FloatingPanelResizeTriggerProps = ComponentProps<
  typeof FloatingPanelPrimitive.ResizeTrigger
>;

export type FloatingPanelStageTriggerProps = ComponentProps<
  typeof FloatingPanelPrimitive.StageTrigger
>;

export type FloatingPanelCloseTriggerProps = ComponentProps<
  typeof FloatingPanelPrimitive.CloseTrigger
>;
// #endregion

// #region Parts
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

export function FloatingPanelTrigger(props: FloatingPanelTriggerProps) {
  return <FloatingPanelPrimitive.Trigger {...props} />;
}

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
          className={floatingPanelContentVariants({ className })}
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

export function FloatingPanelDragTrigger(props: FloatingPanelDragTriggerProps) {
  return <FloatingPanelPrimitive.DragTrigger {...props} />;
}

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
        className={floatingPanelInlineVariants({ className })}
      >
        {title && <FloatingPanelTitle>{title}</FloatingPanelTitle>}

        {children}
      </FloatingPanelPrimitive.Header>
    </FloatingPanelDragTrigger>
  );
}

export function FloatingPanelControl({ className, ...rest }: FloatingPanelControlProps) {
  return (
    <FloatingPanelPrimitive.Control
      {...rest}
      className={floatingPanelInline2Variants({ className })}
    />
  );
}

export function FloatingPanelMinimize({
  size = "icon-xs",
  variant = "ghost",
  ...rest
}: FloatingPanelMinimizeProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="minimized">
      <Button aria-label="Minimize" size={size} variant={variant}>
        <MinusIcon />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}

export function FloatingPanelMaximize({
  size = "icon-xs",
  variant = "ghost",
  ...rest
}: FloatingPanelMaximizeProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="maximized">
      <Button aria-label="Maximize" size={size} variant={variant}>
        <ArrowsOutIcon />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}

export function FloatingPanelRestore({
  size = "icon-xs",
  variant = "outline",
  ...rest
}: FloatingPanelRestoreProps) {
  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="default">
      <Button aria-label="Restore" size={size} variant={variant}>
        <CornersInIcon className={floatingPanelInline3Variants()} />
        <ArrowsOutIcon className={floatingPanelInline4Variants()} />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}

export function FloatingPanelTitle({ className, ...rest }: FloatingPanelTitleProps) {
  return (
    <FloatingPanelPrimitive.Title {...rest} className={floatingPanelTitleVariants({ className })} />
  );
}

export function FloatingPanelResizeTrigger(props: FloatingPanelResizeTriggerProps) {
  return <FloatingPanelPrimitive.ResizeTrigger {...props} />;
}

export function FloatingPanelStageTrigger(props: FloatingPanelStageTriggerProps) {
  return <FloatingPanelPrimitive.StageTrigger {...props} />;
}

export function FloatingPanelCloseTrigger(props: FloatingPanelCloseTriggerProps) {
  return <FloatingPanelPrimitive.CloseTrigger {...props} />;
}

export function FloatingPanelBody({
  scrollFade = false,
  className,
  children,
  ...rest
}: FloatingPanelBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <FloatingPanelPrimitive.Body {...rest} className={floatingPanelBodyVariants({ className })}>
        {children}
      </FloatingPanelPrimitive.Body>
    </ScrollArea>
  );
}

export function FloatingPanelFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={floatingPanelFooterVariants({ className })}
      data-part="footer"
      data-scope="floating-panel"
    />
  );
}

FloatingPanelRoot.displayName = "FloatingPanel";
FloatingPanelTrigger.displayName = "FloatingPanel.Trigger";
FloatingPanelContent.displayName = "FloatingPanel.Content";
FloatingPanelDragTrigger.displayName = "FloatingPanel.DragTrigger";
FloatingPanelHeader.displayName = "FloatingPanel.Header";
FloatingPanelControl.displayName = "FloatingPanel.Control";
FloatingPanelMinimize.displayName = "FloatingPanel.Minimize";
FloatingPanelMaximize.displayName = "FloatingPanel.Maximize";
FloatingPanelRestore.displayName = "FloatingPanel.Restore";
FloatingPanelTitle.displayName = "FloatingPanel.Title";
FloatingPanelResizeTrigger.displayName = "FloatingPanel.ResizeTrigger";
FloatingPanelStageTrigger.displayName = "FloatingPanel.StageTrigger";
FloatingPanelCloseTrigger.displayName = "FloatingPanel.CloseTrigger";
FloatingPanelBody.displayName = "FloatingPanel.Body";
FloatingPanelFooter.displayName = "FloatingPanel.Footer";
// #endregion
