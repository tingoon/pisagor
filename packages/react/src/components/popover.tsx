import { ark } from "@ark-ui/react/factory";
import type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseTriggerProps,
  PopoverPositionerProps,
  PopoverContentProps as PopoverPrimitiveContentProps,
  PopoverRootProps,
  PopoverTriggerProps,
} from "@ark-ui/react/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import type { PopoverProps as BasePopoverContentProps } from "@pisagor/props";
import { popoverRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../utils";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: PopoverStylesContext,
  useStyles: usePopover,
  withContext,
} = createSlotRecipeContext({
  name: "Popover",
  recipe: popoverRecipe,
});
// #endregion

// #region Types
export interface PopoverContentProps
  extends PopoverPrimitiveContentProps,
    BasePopoverContentProps {
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
  recipe = popoverRecipe,
  className,
  ...rest
}: PopoverContentProps) {
  const slots = recipe();

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverStylesContext value={{ slots, variants: {} as never }}>
          <PopoverPrimitive.Content
            {...rest}
            className={slots.base({ className })}
          >
            {children}

            {!!showCloseButton && (
              <PopoverCloseTrigger asChild>
                <Button
                  aria-label="Close"
                  className={slots.close()}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </PopoverCloseTrigger>
            )}
          </PopoverPrimitive.Content>
        </PopoverStylesContext>
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
  const { slots } = usePopover();

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

export const PopoverTitle = withContext(PopoverPrimitive.Title, {
  name: "Title",
});

export const PopoverDescription = withContext(PopoverPrimitive.Description, {
  name: "Description",
});

export function PopoverBody({ className, ...rest }: PopoverBodyProps) {
  const { slots } = usePopover();

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

export const PopoverFooter = withContext(ark.div, {
  name: "Footer",
});

export function PopoverCloseTrigger(props: PopoverCloseTriggerProps) {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}

export function PopoverArrow({ style, ...rest }: PopoverArrowProps) {
  const { slots } = usePopover();

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
PopoverBody.displayName = "Popover.Body";
PopoverCloseTrigger.displayName = "Popover.CloseTrigger";
PopoverArrow.displayName = "Popover.Arrow";

// #endregion

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseTriggerProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverRootProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/react/popover";

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
