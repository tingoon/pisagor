import { Popover as PopoverPrimitive, type HTMLArkProps } from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type { PopoverContract, PopoverRootContract } from "@pisagor/contracts";
import { popoverRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
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

export type PopoverHeaderProps = HTMLArkProps<"div">;

export type PopoverBodyProps = HTMLArkProps<"div">;

export type PopoverFooterProps = HTMLArkProps<"div">;

export interface PopoverProps
  extends Omit<PopoverRootProps, "title">, PopoverContract {
  /** Footer action area. */
  actions?: JSX.Element;
  /** Supporting copy in the header. */
  description?: JSX.Element;
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
  title?: JSX.Element;
  /** Trigger that opens the popover (render fn preferred). */
  trigger?: DialogTriggerRender;
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

const Arrow = withContext<PopoverArrowProps>(PopoverPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ArrowTip = withContext<PopoverArrowTipProps>(PopoverPrimitive.ArrowTip, {
  name: "ArrowTip",
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
export function PopoverShorthand(props: PopoverProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "classNames",
    "description",
    "showArrow",
    "showCloseButton",
    "title",
    "trigger",
  ]);
  const hasHeader = () =>
    local.title !== undefined || local.description !== undefined;

  return (
    <Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <Trigger
          asChild={renderTrigger(local.trigger)}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.base}>
            <Show when={local.showArrow ?? false}>
              <Arrow class={local.classNames?.arrow}>
                <ArrowTip class={local.classNames?.arrowTip} />
              </Arrow>
            </Show>

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
              <ScrollArea>
                <Body class={cn("overflow-visible", local.classNames?.body)}>
                  {local.children}
                </Body>
              </ScrollArea>
            </Show>

            <Show when={local.actions !== undefined}>
              <Footer class={local.classNames?.footer}>{local.actions}</Footer>
            </Show>

            <Show when={local.showCloseButton ?? false}>
              <InlineCloseTrigger
                asChild={(triggerProps) => (
                  <Button
                    {...triggerProps()}
                    aria-label={m("popover.close")}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <XIcon />
                  </Button>
                )}
                class={local.classNames?.close}
              />
            </Show>
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
} from "@ark-ui/solid";

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
