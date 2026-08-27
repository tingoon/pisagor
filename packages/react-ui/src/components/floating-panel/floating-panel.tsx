import { ark } from "@ark-ui/react/factory";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { ArrowsOutIcon, CornersInIcon, MinusIcon } from "@phosphor-icons/react";
import { floatingPanelVariants } from "@pisagor/recipes/floating-panel";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Button, type ButtonProps } from "../button";
import { ScrollArea } from "../scroll-area";
import { FloatingPanelContext, useFloatingPanel } from "./floating-panel.context";

// #region Types
export type FloatingPanelRootProps = ComponentProps<typeof FloatingPanelPrimitive.Root>;

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
  extends ComponentProps<typeof FloatingPanelPrimitive.Header> {}

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

export type FloatingPanelFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function FloatingPanelRoot({ children, ...rest }: FloatingPanelRootProps) {
  const slots = useMemo(() => floatingPanelVariants(), []);

  return (
    <FloatingPanelContext value={{ slots }}>
      <FloatingPanelPrimitive.Root {...rest}>{children}</FloatingPanelPrimitive.Root>
    </FloatingPanelContext>
  );
}

export function FloatingPanelTrigger(props: FloatingPanelTriggerProps) {
  return <FloatingPanelPrimitive.Trigger {...props} />;
}

export function FloatingPanelContent({
  children,
  resizable = true,
  className,
  ...rest
}: FloatingPanelContentProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <Portal>
      <FloatingPanelPrimitive.Positioner className={slots.positioner()}>
        <FloatingPanelPrimitive.Content {...rest} className={slots.content({ className })}>
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

export function FloatingPanelHeader({ children, className, ...rest }: FloatingPanelHeaderProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <FloatingPanelDragTrigger>
      <FloatingPanelPrimitive.Header {...rest} className={slots.header({ className })}>
        {children}
      </FloatingPanelPrimitive.Header>
    </FloatingPanelDragTrigger>
  );
}

export function FloatingPanelControl({ children, className, ...rest }: FloatingPanelControlProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <FloatingPanelPrimitive.Control {...rest} className={slots.control({ className })}>
      {children}
    </FloatingPanelPrimitive.Control>
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
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <FloatingPanelPrimitive.StageTrigger {...rest} asChild stage="default">
      <Button aria-label="Restore" size={size} variant={variant}>
        <CornersInIcon className={slots.maximizedIcon()} />
        <ArrowsOutIcon className={slots.minimizedIcon()} />
      </Button>
    </FloatingPanelPrimitive.StageTrigger>
  );
}

export function FloatingPanelTitle({ children, className, ...rest }: FloatingPanelTitleProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <FloatingPanelPrimitive.Title {...rest} className={slots.title({ className })}>
      {children}
    </FloatingPanelPrimitive.Title>
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
  children,
  className,
  ...rest
}: FloatingPanelBodyProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <ScrollArea scrollFade={scrollFade}>
      <FloatingPanelPrimitive.Body {...rest} className={slots.body({ className })}>
        {children}
      </FloatingPanelPrimitive.Body>
    </ScrollArea>
  );
}

export function FloatingPanelFooter({ children, className, ...rest }: FloatingPanelFooterProps) {
  const { slots = floatingPanelVariants() } = useFloatingPanel() ?? {};

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="floating-panel"
    >
      {children}
    </ark.div>
  );
}
// #endregion

// #region Display Names
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
