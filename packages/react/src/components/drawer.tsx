import { Drawer as DrawerPrimitive, Portal } from "@ark-ui/react";
import type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerGrabberIndicatorProps,
  DrawerGrabberProps,
  DrawerPositionerProps,
  DrawerRootProps as DrawerRootPrimitiveProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/react";
import type { DrawerContract, DrawerRootContract } from "@pisagor/contracts";
import { drawerRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
// #endregion

// #region Types
/**
 * `placement` is not a prop: it always follows `swipeDirection` so the slide
 * animation and rounded edge match the dismiss gesture.
 */
export type DrawerRootProps = DrawerRootPrimitiveProps &
  Omit<DrawerRootContract, "placement">;

export type DrawerGrabberWrapperProps = ComponentPropsWithRef<"div">;

export type DrawerContentInnerProps = ComponentPropsWithRef<"div">;

export type DrawerHeaderProps = ComponentPropsWithRef<"div">;

export type DrawerBodyProps = ComponentPropsWithRef<"div">;

export type DrawerFooterProps = ComponentPropsWithRef<"div">;

export interface DrawerProps extends DrawerRootProps, DrawerContract {
  /** Footer action area. */
  actions?: ReactNode;
  /** Supporting copy in the header. */
  description?: ReactNode;
  /**
   * Whether to add a fade effect to the body scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /** Drawer title. */
  title?: ReactNode;
  /** Trigger content that opens the drawer. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "bottom",
  end: "right",
  start: "left",
  up: "top",
} as const;

const RootBase = withProvider<
  DrawerRootProps & Pick<DrawerRootContract, "placement">
>(DrawerPrimitive.Root, { name: "Root", slot: "base" });

function Root({ swipeDirection = "down", ...rest }: DrawerRootProps) {
  return (
    <RootBase
      {...rest}
      placement={SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection]}
      swipeDirection={swipeDirection}
    />
  );
}

const Trigger = withContext<DrawerTriggerProps>(DrawerPrimitive.Trigger, {
  name: "Trigger",
});

const Backdrop = withContext<DrawerBackdropProps>(DrawerPrimitive.Backdrop, {
  name: "Backdrop",
});

const Positioner = withContext<DrawerPositionerProps>(
  DrawerPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DrawerContentProps>(DrawerPrimitive.Content, {
  name: "Content",
});

const GrabberWrapper = withContext<DrawerGrabberWrapperProps>("div", {
  name: "GrabberWrapper",
});

const GrabberIndicator = withContext<DrawerGrabberIndicatorProps>(
  DrawerPrimitive.GrabberIndicator,
  { name: "GrabberIndicator", slot: "grabberIcon" },
);

const Grabber = withContext<DrawerGrabberProps>(DrawerPrimitive.Grabber, {
  defaultProps: { children: <GrabberIndicator /> },
  name: "Grabber",
});

const ContentInner = withContext<DrawerContentInnerProps>("div", {
  name: "ContentInner",
});

const Header = withContext<DrawerHeaderProps>("div", { name: "Header" });

const Title = withContext<DrawerTitleProps>(DrawerPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DrawerDescriptionProps>(
  DrawerPrimitive.Description,
  { name: "Description" },
);

const Body = withContext<DrawerBodyProps>("div", { name: "Body" });

const Footer = withContext<DrawerFooterProps>("div", { name: "Footer" });

const CloseTrigger = withContext<DrawerCloseTriggerProps>(
  DrawerPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);
// #endregion

// #region Shorthand
export function DrawerShorthand({
  actions,
  children,
  classNames,
  description,
  scrollFade = false,
  title,
  trigger,
  ...rest
}: DrawerProps) {
  const hasHeader = title !== undefined || description !== undefined;

  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        <Backdrop className={classNames?.backdrop} />

        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            <GrabberWrapper className={classNames?.grabberWrapper}>
              <Grabber className={classNames?.grabber}>
                <GrabberIndicator className={classNames?.grabberIcon} />
              </Grabber>
            </GrabberWrapper>

            <ContentInner className={classNames?.contentInner}>
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
                <ScrollArea scrollFade={scrollFade}>
                  <Body className={classNames?.body}>{children}</Body>
                </ScrollArea>
              )}
            </ContentInner>

            {actions !== undefined && (
              <Footer className={classNames?.footer}>
                <ContentInner className={classNames?.contentInner}>
                  {actions}
                </ContentInner>
              </Footer>
            )}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

// #region Display Names
Root.displayName = "Drawer.Root";
// #endregion

export type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerGrabberIndicatorProps,
  DrawerGrabberProps,
  DrawerPositionerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/react";

export const Drawer = Object.assign(DrawerShorthand, {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  ContentInner,
  Description,
  Footer,
  Grabber,
  GrabberIndicator,
  GrabberWrapper,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
