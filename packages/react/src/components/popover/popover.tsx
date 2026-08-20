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

export function PopoverTrigger(props: PopoverTriggerProps) {
  const { testId } = usePopoverRoot() ?? {};

  return <PopoverPrimitive.Trigger data-testid={testId} {...props} />;
}

export function PopoverAnchor(props: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor {...props} />;
}

export function PopoverPositioner(props: PopoverPositionerProps) {
  return <PopoverPrimitive.Positioner {...props} />;
}

export function PopoverContent({
  showCloseButton = false,
  className,
  children,
  ...rest
}: PopoverContentProps) {
  const slots = popoverContentVariants();

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverPrimitive.Content {...rest} className={slots.base({ className })}>
          {children}

          {!!showCloseButton && (
            <PopoverClose asChild>
              <Button aria-label="Close" className={slots.close()} size="icon-sm" variant="ghost">
                <XIcon />
              </Button>
            </PopoverClose>
          )}
        </PopoverPrimitive.Content>
      </PopoverPositioner>
    </Portal>
  );
}

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
      className={popoverHeaderVariants({ className })}
      data-part="header"
      data-scope="popover"
    >
      {!!title && <PopoverTitle>{title}</PopoverTitle>}

      {!!description && <PopoverDescription>{description}</PopoverDescription>}

      {children}
    </ark.div>
  );
}

export function PopoverTitle({ className, ...rest }: PopoverTitleProps) {
  return <PopoverPrimitive.Title {...rest} className={popoverTitleVariants({ className })} />;
}

export function PopoverDescription({ className, ...rest }: PopoverDescriptionProps) {
  return (
    <PopoverPrimitive.Description {...rest} className={popoverDescriptionVariants({ className })} />
  );
}

export function PopoverBody({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ScrollArea>
      <ark.div
        {...rest}
        className={popoverBodyVariants({ className })}
        data-part="body"
        data-scope="popover"
      />
    </ScrollArea>
  );
}

export function PopoverFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={popoverFooterVariants({ className })}
      data-part="footer"
      data-scope="popover"
    />
  );
}

export function PopoverClose(props: PopoverCloseProps) {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}

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
// #endregion

// #region Display Names
PopoverRoot.displayName = "Popover";
PopoverTrigger.displayName = "Popover.Trigger";
PopoverAnchor.displayName = "Popover.Anchor";
PopoverPositioner.displayName = "Popover.Positioner";
PopoverContent.displayName = "Popover.Content";
PopoverHeader.displayName = "Popover.Header";
PopoverTitle.displayName = "Popover.Title";
PopoverDescription.displayName = "Popover.Description";
PopoverBody.displayName = "Popover.Body";
PopoverFooter.displayName = "Popover.Footer";
PopoverClose.displayName = "Popover.Close";
PopoverArrow.displayName = "Popover.Arrow";
// #endregion
