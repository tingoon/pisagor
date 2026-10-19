import { Popover as PopoverPrimitive, Portal } from "@ark-ui/react";
import type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverRootProps as PopoverRootPrimitiveProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type { PopoverContract, PopoverRootContract } from "@pisagor/contracts";
import { popoverRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Popover",
  recipe: popoverRecipe,
});
// #endregion

// #region Types
export type PopoverRootProps = PopoverRootPrimitiveProps & PopoverRootContract;

export type PopoverHeaderProps = ComponentPropsWithRef<"div">;

export type PopoverBodyProps = ComponentPropsWithRef<"div">;

export type PopoverFooterProps = ComponentPropsWithRef<"div">;

export interface PopoverProps extends PopoverRootProps, PopoverContract {
  /** Footer action area. */
  actions?: ReactNode;
  /** Supporting copy in the header. */
  description?: ReactNode;
  /**
   * Whether to render an arrow pointing at the trigger.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
  /** Popover title. */
  title?: ReactNode;
  /** Trigger content that opens the popover. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
// The root renders no element; `base` styles the content surface.
const Root = withProvider<PopoverRootProps>(PopoverPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Trigger = withContext<PopoverTriggerProps>(PopoverPrimitive.Trigger, {
  name: "Trigger",
});

const Anchor = withContext<PopoverAnchorProps>(PopoverPrimitive.Anchor, {
  name: "Anchor",
});

const Positioner = withContext<PopoverPositionerProps>(
  PopoverPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<PopoverContentProps>(PopoverPrimitive.Content, {
  name: "Content",
  slot: "base",
});

const ArrowTip = withContext<PopoverArrowTipProps>(PopoverPrimitive.ArrowTip, {
  name: "ArrowTip",
});

const Arrow = withContext<PopoverArrowProps>(PopoverPrimitive.Arrow, {
  defaultProps: {
    children: <ArrowTip />,
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const Header = withContext<PopoverHeaderProps>("div", { name: "Header" });

const Title = withContext<PopoverTitleProps>(PopoverPrimitive.Title, {
  name: "Title",
});

const Description = withContext<PopoverDescriptionProps>(
  PopoverPrimitive.Description,
  { name: "Description" },
);

const Body = withContext<PopoverBodyProps>("div", { name: "Body" });

const Footer = withContext<PopoverFooterProps>("div", { name: "Footer" });

const CloseTrigger = withContext<PopoverCloseTriggerProps>(
  PopoverPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<PopoverCloseTriggerProps>(
  PopoverPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "close" },
);
// #endregion

// #region Shorthand
export function PopoverShorthand({
  actions,
  children,
  classNames,
  description,
  showArrow = false,
  showCloseButton = false,
  title,
  trigger,
  ...rest
}: PopoverProps) {
  const { m } = useLocale();
  const hasHeader = title !== undefined || description !== undefined;

  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.base}>
            {showArrow && (
              <Arrow className={classNames?.arrow}>
                <ArrowTip className={classNames?.arrowTip} />
              </Arrow>
            )}

            {hasHeader && (
              <Header className={classNames?.header}>
                {title !== undefined && (
                  <Title className={classNames?.title}>{title}</Title>
                )}

                {description !== undefined && (
                  <Description className={classNames?.description}>
                    {description}
                  </Description>
                )}
              </Header>
            )}

            {children !== undefined && (
              <ScrollArea>
                <Body className={cn("overflow-visible", classNames?.body)}>
                  {children}
                </Body>
              </ScrollArea>
            )}

            {actions !== undefined && (
              <Footer className={classNames?.footer}>{actions}</Footer>
            )}

            {showCloseButton && (
              <InlineCloseTrigger asChild className={classNames?.close}>
                <Button
                  aria-label={m("popover.close")}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </InlineCloseTrigger>
            )}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/react";

export const Popover = Object.assign(PopoverShorthand, {
  Anchor,
  Arrow,
  ArrowTip,
  Body,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
