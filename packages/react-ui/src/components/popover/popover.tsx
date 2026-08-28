import { ark } from "@ark-ui/react/factory";
import { Popover as PopoverPrimitive } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import { popoverVariants } from "@pisagor/recipes/popover";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { PopoverContentContext, usePopoverContent } from "./popover.context";

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

export type PopoverRootProps = ComponentProps<typeof PopoverPrimitive.Root>;

export type PopoverTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export type PopoverAnchorProps = ComponentProps<typeof PopoverPrimitive.Anchor>;

export type PopoverPositionerProps = ComponentProps<typeof PopoverPrimitive.Positioner>;

export type PopoverTitleProps = ComponentProps<typeof PopoverPrimitive.Title>;

export type PopoverDescriptionProps = ComponentProps<typeof PopoverPrimitive.Description>;

export type PopoverCloseTriggerProps = ComponentProps<typeof PopoverPrimitive.CloseTrigger>;

export type PopoverArrowProps = ComponentProps<typeof PopoverPrimitive.Arrow>;

export type PopoverBodyProps = ComponentProps<typeof ark.div>;

export type PopoverFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function PopoverRoot({ modal = false, ...rest }: PopoverRootProps) {
  return <PopoverPrimitive.Root {...rest} modal={modal} />;
}

export function PopoverTrigger(props: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger {...props} />;
}

export function PopoverAnchor(props: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor {...props} />;
}

export function PopoverPositioner(props: PopoverPositionerProps) {
  return <PopoverPrimitive.Positioner {...props} />;
}

export function PopoverContent({
  showCloseButton = false,
  children,
  className,
  ...rest
}: PopoverContentProps) {
  const slots = useMemo(() => popoverVariants(), []);

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverContentContext value={{ slots }}>
          <PopoverPrimitive.Content {...rest} className={slots.base({ className })}>
            {children}

            {!!showCloseButton && (
              <PopoverCloseTrigger asChild>
                <Button aria-label="Close" className={slots.close()} size="icon-sm" variant="ghost">
                  <XIcon />
                </Button>
              </PopoverCloseTrigger>
            )}
          </PopoverPrimitive.Content>
        </PopoverContentContext>
      </PopoverPositioner>
    </Portal>
  );
}

export function PopoverHeader({
  children,
  description,
  title,
  className,
  ...rest
}: PopoverHeaderProps) {
  const { slots } = usePopoverContent();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
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
  const { slots } = usePopoverContent();

  return <PopoverPrimitive.Title {...rest} className={slots.title({ className })} />;
}

export function PopoverDescription({ className, ...rest }: PopoverDescriptionProps) {
  const { slots } = usePopoverContent();

  return <PopoverPrimitive.Description {...rest} className={slots.description({ className })} />;
}

export function PopoverBody({ className, ...rest }: PopoverBodyProps) {
  const { slots } = usePopoverContent();

  return (
    <ScrollArea>
      <ark.div
        {...rest}
        className={slots.body({ className })}
        data-part="body"
        data-scope="popover"
      />
    </ScrollArea>
  );
}

export function PopoverFooter({ className, ...rest }: PopoverFooterProps) {
  const { slots } = usePopoverContent();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="popover"
    />
  );
}

export function PopoverCloseTrigger(props: PopoverCloseTriggerProps) {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}

export function PopoverArrow({ style, ...rest }: PopoverArrowProps) {
  const { slots } = usePopoverContent();

  return (
    <PopoverPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...style,
      }}
    >
      <PopoverPrimitive.ArrowTip className={slots.arrowTip()} />
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
PopoverCloseTrigger.displayName = "Popover.CloseTrigger";
PopoverArrow.displayName = "Popover.Arrow";
// #endregion
