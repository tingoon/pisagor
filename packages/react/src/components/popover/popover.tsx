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
  popoverInlineVariants,
  popoverTitleVariants,
} from "@pisagor/styles/ui/popover";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";

// #region Types
interface PopoverContentProps extends ComponentProps<typeof PopoverPrimitive.Content> {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
}

interface PopoverHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the popover header */
  description?: string;
  /** The title of the popover header */
  title?: string;
}

interface PopoverRootProps extends ComponentProps<typeof PopoverPrimitive.Root>, WithTestId {}

// #endregion

// #region Context
const [PopoverRootContext, usePopoverRoot] = createContext<{ testId?: string }>({
  name: "PopoverRoot",
  strict: false,
});

// #endregion

// #region Components
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

export function PopoverTrigger(props: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  const { testId } = usePopoverRoot() ?? {};

  return <PopoverPrimitive.Trigger data-testid={testId} {...props} />;
}
PopoverTrigger.displayName = "Popover.Trigger";

export function PopoverAnchor(props: ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor {...props} />;
}
PopoverAnchor.displayName = "Popover.Anchor";

export function PopoverPositioner(props: ComponentProps<typeof PopoverPrimitive.Positioner>) {
  return <PopoverPrimitive.Positioner {...props} />;
}
PopoverPositioner.displayName = "Popover.Positioner";

export function PopoverContent({
  showCloseButton = false,
  className,
  children,
  ...rest
}: PopoverContentProps) {
  return (
    <Portal>
      <PopoverPositioner>
        <PopoverPrimitive.Content {...rest} className={cn(popoverContentVariants(), className)}>
          {children}

          {!!showCloseButton && (
            <PopoverClose asChild>
              <Button
                aria-label="Close"
                className={popoverInlineVariants()}
                size="icon-sm"
                variant="ghost"
              >
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

export function PopoverTitle({
  className,
  ...rest
}: ComponentProps<typeof PopoverPrimitive.Title>) {
  return <PopoverPrimitive.Title {...rest} className={cn(popoverTitleVariants(), className)} />;
}
PopoverTitle.displayName = "Popover.Title";

export function PopoverDescription({
  className,
  ...rest
}: ComponentProps<typeof PopoverPrimitive.Description>) {
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

export function PopoverClose(props: ComponentProps<typeof PopoverPrimitive.CloseTrigger>) {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}
PopoverClose.displayName = "Popover.Close";

export function PopoverArrow({ style, ...rest }: ComponentProps<typeof PopoverPrimitive.Arrow>) {
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
