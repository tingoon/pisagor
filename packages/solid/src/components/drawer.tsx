import { Drawer as DrawerPrimitive, type HTMLArkProps } from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type { DrawerContract, DrawerRootContract } from "@pisagor/contracts";
import { drawerRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
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

export type DrawerContentInnerProps = HTMLArkProps<"div">;

export type DrawerHeaderProps = HTMLArkProps<"div">;

export type DrawerBodyProps = HTMLArkProps<"div">;

export type DrawerFooterProps = HTMLArkProps<"div">;

export interface DrawerProps
  extends Omit<DrawerRootProps, "title">, DrawerContract {
  /** Footer action area. */
  actions?: JSX.Element;
  /** Supporting copy in the header. */
  description?: JSX.Element;
  /**
   * Whether to add a fade effect to the body scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /** Drawer title. */
  title?: JSX.Element;
  /**
   * Trigger that opens the drawer. Prefer a render fn for Solid `asChild`; JSX
   * elements are wrapped with `display: contents`.
   */
  trigger?:
    | JSX.Element
    | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);
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

function Root(props: DrawerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["swipeDirection"]);
  const swipeDirection = () => local.swipeDirection ?? "down";

  return (
    <RootBase
      {...rest}
      placement={SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection()]}
      swipeDirection={swipeDirection()}
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

// Ark semantics: `Grabber` is the padded drag hit area (`grabberWrapper` slot),
// `GrabberIndicator` is the visible bar (`grabber` slot).
const Grabber = withContext<DrawerGrabberProps>(DrawerPrimitive.Grabber, {
  name: "Grabber",
  slot: "grabberWrapper",
});

const GrabberIndicator = withContext<DrawerGrabberIndicatorProps>(
  DrawerPrimitive.GrabberIndicator,
  { name: "GrabberIndicator", slot: "grabber" },
);

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
export function DrawerShorthand(props: DrawerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "classNames",
    "description",
    "scrollFade",
    "title",
    "trigger",
  ]);
  const hasHeader = () =>
    local.title !== undefined || local.description !== undefined;

  return (
    <Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <Trigger
          asChild={(triggerProps) => {
            if (typeof local.trigger === "function") {
              return local.trigger(triggerProps());
            }

            return (
              <span {...triggerProps()} style={{ display: "contents" }}>
                {local.trigger}
              </span>
            );
          }}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <Backdrop class={local.classNames?.backdrop} />

        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Grabber class={local.classNames?.grabberWrapper}>
              <GrabberIndicator class={local.classNames?.grabber} />
            </Grabber>

            <ContentInner class={local.classNames?.contentInner}>
              <Show when={hasHeader()}>
                <Header class={local.classNames?.header}>
                  <Show when={local.title !== undefined}>
                    <Title class={local.classNames?.title}>{local.title}</Title>
                  </Show>

                  <Show when={local.description !== undefined}>
                    <Description class={local.classNames?.description}>
                      {local.description}
                    </Description>
                  </Show>
                </Header>
              </Show>

              <Show when={local.children !== undefined}>
                <ScrollArea scrollFade={local.scrollFade ?? false}>
                  <Body class={local.classNames?.body}>{local.children}</Body>
                </ScrollArea>
              </Show>
            </ContentInner>

            <Show when={local.actions !== undefined}>
              <Footer class={local.classNames?.footer}>
                <ContentInner class={local.classNames?.contentInner}>
                  {local.actions}
                </ContentInner>
              </Footer>
            </Show>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
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
} from "@ark-ui/solid";

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
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
