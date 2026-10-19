import { FloatingPanel as FloatingPanelPrimitive, Portal } from "@ark-ui/react";
import type {
  FloatingPanelBodyProps,
  FloatingPanelCloseTriggerProps,
  FloatingPanelContentProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelPositionerProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelRootProps as FloatingPanelRootPrimitiveProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/react";
import {
  ArrowsOutIcon,
  CornersInIcon,
  MinusIcon,
  XIcon,
} from "@phosphor-icons/react";
import type { FloatingPanelRootContract } from "@pisagor/contracts";
import type { FloatingPanelRecipeSlot } from "@pisagor/recipes";
import { floatingPanelRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "FloatingPanel",
  recipe: floatingPanelRecipe,
});
// #endregion

// #region Types
export type FloatingPanelRootProps = FloatingPanelRootPrimitiveProps &
  FloatingPanelRootContract;

export type FloatingPanelFooterProps = ComponentPropsWithRef<"div">;

export interface FloatingPanelProps extends FloatingPanelRootProps {
  /** Footer action area. */
  actions?: ReactNode;
  /** Panel body content. */
  children?: ReactNode;
  /** Per-slot class name overrides. */
  classNames?: Partial<Record<FloatingPanelRecipeSlot, string>>;
  /** Leading header content, such as an icon. */
  icon?: ReactNode;
  /**
   * Whether to render resize handles on every edge and corner.
   *
   * @defaultValue true
   */
  resizable?: boolean;
  /**
   * Whether to add a fade effect to the scrollable body.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /**
   * Whether to show the close button in the header.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /**
   * Whether to show minimize, maximize and restore buttons in the header.
   *
   * @defaultValue true
   */
  showStageControls?: boolean;
  /** Panel title. */
  title?: ReactNode;
  /** Trigger element that opens the panel. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<FloatingPanelRootProps>(FloatingPanelPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Trigger = withContext<FloatingPanelTriggerProps>(
  FloatingPanelPrimitive.Trigger,
  { name: "Trigger" },
);

const Positioner = withContext<FloatingPanelPositionerProps>(
  FloatingPanelPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<FloatingPanelContentProps>(
  FloatingPanelPrimitive.Content,
  { name: "Content" },
);

const DragTrigger = withContext<FloatingPanelDragTriggerProps>(
  FloatingPanelPrimitive.DragTrigger,
  { name: "DragTrigger" },
);

const Header = withContext<FloatingPanelHeaderProps>(
  FloatingPanelPrimitive.Header,
  { name: "Header" },
);

const Title = withContext<FloatingPanelTitleProps>(
  FloatingPanelPrimitive.Title,
  { name: "Title" },
);

const Control = withContext<FloatingPanelControlProps>(
  FloatingPanelPrimitive.Control,
  { name: "Control" },
);

const StageTrigger = withContext<FloatingPanelStageTriggerProps>(
  FloatingPanelPrimitive.StageTrigger,
  { name: "StageTrigger" },
);

const CloseTrigger = withContext<FloatingPanelCloseTriggerProps>(
  FloatingPanelPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

const ResizeTrigger = withContext<FloatingPanelResizeTriggerProps>(
  FloatingPanelPrimitive.ResizeTrigger,
  { name: "ResizeTrigger" },
);

const Body = withContext<FloatingPanelBodyProps>(FloatingPanelPrimitive.Body, {
  name: "Body",
});

const Footer = withContext<FloatingPanelFooterProps>("div", { name: "Footer" });
// #endregion

// #region Shorthand
const resizeAxes = ["n", "e", "w", "s", "ne", "se", "sw", "nw"] as const;

function StageControls() {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <>
      <StageTrigger asChild stage="minimized">
        <Button
          aria-label={m("floatingPanel.minimize")}
          size="icon-xs"
          variant="ghost"
        >
          <MinusIcon />
        </Button>
      </StageTrigger>

      <StageTrigger asChild stage="maximized">
        <Button
          aria-label={m("floatingPanel.maximize")}
          size="icon-xs"
          variant="ghost"
        >
          <ArrowsOutIcon />
        </Button>
      </StageTrigger>

      <StageTrigger asChild stage="default">
        <Button
          aria-label={m("floatingPanel.restore")}
          size="icon-xs"
          variant="outline"
        >
          <CornersInIcon className={slots.maximizedIcon()} />
          <ArrowsOutIcon className={slots.minimizedIcon()} />
        </Button>
      </StageTrigger>
    </>
  );
}

export function FloatingPanelShorthand({
  actions,
  children,
  classNames,
  icon,
  resizable = true,
  scrollFade = false,
  showCloseButton = true,
  showStageControls = true,
  title,
  trigger,
  ...rest
}: FloatingPanelProps) {
  const { m } = useLocale();
  const hasControls = showStageControls || showCloseButton;

  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger asChild className={classNames?.trigger}>
          {trigger}
        </Trigger>
      )}

      <Portal>
        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            <DragTrigger className={classNames?.dragTrigger}>
              <Header className={classNames?.header}>
                {icon}

                {title !== undefined && (
                  <Title className={classNames?.title}>{title}</Title>
                )}

                {hasControls && (
                  <Control className={classNames?.control}>
                    {showStageControls && <StageControls />}

                    {showCloseButton && (
                      <CloseTrigger
                        asChild
                        className={classNames?.closeTrigger}
                      >
                        <Button
                          aria-label={m("floatingPanel.close")}
                          size="icon-xs"
                        >
                          <XIcon />
                        </Button>
                      </CloseTrigger>
                    )}
                  </Control>
                )}
              </Header>
            </DragTrigger>

            {children !== undefined && (
              <ScrollArea scrollFade={scrollFade}>
                <Body className={classNames?.body}>{children}</Body>
              </ScrollArea>
            )}

            {actions !== undefined && (
              <Footer className={classNames?.footer}>{actions}</Footer>
            )}

            {resizable &&
              resizeAxes.map((axis) => (
                <ResizeTrigger
                  axis={axis}
                  className={classNames?.resizeTrigger}
                  key={axis}
                />
              ))}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  FloatingPanelBodyProps,
  FloatingPanelCloseTriggerProps,
  FloatingPanelContentProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelPositionerProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/react";

export const FloatingPanel = Object.assign(FloatingPanelShorthand, {
  Body,
  CloseTrigger,
  Content,
  Control,
  DragTrigger,
  Footer,
  Header,
  Positioner,
  ResizeTrigger,
  Root,
  StageTrigger,
  Title,
  Trigger,
});
