import { ark } from "@ark-ui/react/factory";
import { Popover as PopoverPrimitive } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import {
  popoverBodyVariants,
  popoverContentVariants,
  popoverDescriptionVariants,
  popoverFooterVariants,
  popoverHeaderVariants,
  popoverInline2Variants,
  popoverTitleVariants,
} from "@pisagor/styles/ui/popover";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { PopoverRootContext, usePopoverRoot } from "./popover.context";

// #region Types
export interface PopoverContentProps extends ComponentProps<typeof PopoverPrimitive.Content> {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
}

export interface PopoverHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the popover header */
  description?: string;
  /** The title of the popover header */
  title?: string;
}

export interface PopoverRootProps
  extends ComponentProps<typeof PopoverPrimitive.Root>,
    WithTestId {}

export type PopoverTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export type PopoverAnchorProps = ComponentProps<typeof PopoverPrimitive.Anchor>;

export type PopoverPositionerProps = ComponentProps<typeof PopoverPrimitive.Positioner>;

export type PopoverTitleProps = ComponentProps<typeof PopoverPrimitive.Title>;

export type PopoverDescriptionProps = ComponentProps<typeof PopoverPrimitive.Description>;

export type PopoverCloseProps = ComponentProps<typeof PopoverPrimitive.CloseTrigger>;

export type PopoverArrowProps = ComponentProps<typeof PopoverPrimitive.Arrow>;
// #endregion

// #region Parts
export function PopoverRoot({
  lazyMount = true,
  unmountOnExit = true,
  modal = false,
  testId,
  ...rest
}: PopoverRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <PopoverRootContext value={{ testId: dataTestId ?? testId }}>
      <PopoverPrimitive.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </PopoverRootContext>
  );
}
PopoverRoot.displayName = "Popover";

export function PopoverTrigger(props: PopoverTriggerProps) {
  const { testId } = usePopoverRoot() ?? {};

  return <PopoverPrimitive.Trigger data-testid={testId} {...props} />;
}
PopoverTrigger.displayName = "Popover.Trigger";

export function PopoverAnchor(props: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor {...props} />;
}
PopoverAnchor.displayName = "Popover.Anchor";

export function PopoverPositioner(props: PopoverPositionerProps) {
  return <PopoverPrimitive.Positioner {...props} />;
}
PopoverPositioner.displayName = "Popover.Positioner";

export function PopoverContent({
  showCloseButton = false,
  className,
  children,
  ...rest
}: PopoverContentProps) {
  const recipe = popoverContentVariants();

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverPrimitive.Content {...rest} className={recipe.base({ className })}>
          {children}

          {!!showCloseButton && (
            <PopoverClose asChild>
              <Button aria-label="Close" className={recipe.close()} size="icon-sm" variant="ghost">
                <XIcon />
              </Button>
            </PopoverClose>
          )}
        </PopoverPrimitive.Content>
      </PopoverPositioner>
    </Portal>
  );
}
PopoverContent.displayName = "Popover.Content";

export function PopoverHeader({
  title,
  description,
  children,
  className,
  ...rest
}: PopoverHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cn(popoverHeaderVariants(), className)}
      data-part="header"
      data-scope="popover"
    >
      {!!title && <PopoverTitle>{title}</PopoverTitle>}

      {!!description && <PopoverDescription>{description}</PopoverDescription>}

      {children}
    </ark.div>
  );
}
PopoverHeader.displayName = "Popover.Header";

export function PopoverTitle({ className, ...rest }: PopoverTitleProps) {
  return <PopoverPrimitive.Title {...rest} className={cn(popoverTitleVariants(), className)} />;
}
PopoverTitle.displayName = "Popover.Title";

export function PopoverDescription({ className, ...rest }: PopoverDescriptionProps) {
  return (
    <PopoverPrimitive.Description
      {...rest}
      className={cn(popoverDescriptionVariants(), className)}
    />
  );
}
PopoverDescription.displayName = "Popover.Description";

export function PopoverBody({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ScrollArea>
      <ark.div
        {...rest}
        className={cn(popoverBodyVariants(), className)}
        data-part="body"
        data-scope="popover"
      />
    </ScrollArea>
  );
}
PopoverBody.displayName = "Popover.Body";

export function PopoverFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(popoverFooterVariants(), className)}
      data-part="footer"
      data-scope="popover"
    />
  );
}
PopoverFooter.displayName = "Popover.Footer";

export function PopoverClose(props: PopoverCloseProps) {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}
PopoverClose.displayName = "Popover.Close";

export function PopoverArrow({ style, ...rest }: PopoverArrowProps) {
  return (
    <PopoverPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...style,
      }}
    >
      <PopoverPrimitive.ArrowTip className={popoverInline2Variants()} />
    </PopoverPrimitive.Arrow>
  );
}
PopoverArrow.displayName = "Popover.Arrow";
// #endregion
