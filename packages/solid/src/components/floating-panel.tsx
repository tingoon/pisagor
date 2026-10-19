import {
  FloatingPanel as FloatingPanelPrimitive,
  type HTMLArkProps,
} from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type { FloatingPanelRootContract } from "@pisagor/contracts";
import type { FloatingPanelRecipeSlot } from "@pisagor/recipes";
import { floatingPanelRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  ArrowsOutIcon,
  CornersInIcon,
  MinusIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
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

export type FloatingPanelFooterProps = HTMLArkProps<"div">;

export interface FloatingPanelProps extends Omit<
  FloatingPanelRootProps,
  "title"
> {
  /** Footer action area. */
  actions?: JSX.Element;
  /** Panel body content. */
  children?: JSX.Element;
  /** Per-slot class name overrides. */
  classNames?: Partial<Record<FloatingPanelRecipeSlot, string>>;
  /** Leading header content, such as an icon. */
  icon?: JSX.Element;
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
  title?: JSX.Element;
  /** Trigger element that opens the panel (render fn preferred). */
  trigger?: DialogTriggerRender;
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

function StageControls(): JSX.Element {
  const { m } = useLocale();
  const styles = useStyles();

  return (
    <>
      <StageTrigger
        asChild={(triggerProps) => (
          <Button
            {...triggerProps()}
            aria-label={m("floatingPanel.minimize")}
            size="icon-xs"
            variant="ghost"
          >
            <MinusIcon />
          </Button>
        )}
        stage="minimized"
      />

      <StageTrigger
        asChild={(triggerProps) => (
          <Button
            {...triggerProps()}
            aria-label={m("floatingPanel.maximize")}
            size="icon-xs"
            variant="ghost"
          >
            <ArrowsOutIcon />
          </Button>
        )}
        stage="maximized"
      />

      <StageTrigger
        asChild={(triggerProps) => (
          <Button
            {...triggerProps()}
            aria-label={m("floatingPanel.restore")}
            size="icon-xs"
            variant="outline"
          >
            <CornersInIcon class={styles.slots.maximizedIcon()} />
            <ArrowsOutIcon class={styles.slots.minimizedIcon()} />
          </Button>
        )}
        stage="default"
      />
    </>
  );
}

export function FloatingPanelShorthand(props: FloatingPanelProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "classNames",
    "icon",
    "resizable",
    "scrollFade",
    "showCloseButton",
    "showStageControls",
    "title",
    "trigger",
  ]);
  const showStageControls = () => local.showStageControls ?? true;
  const showCloseButton = () => local.showCloseButton ?? true;

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
          <Content class={local.classNames?.content}>
            <DragTrigger class={local.classNames?.dragTrigger}>
              <Header class={local.classNames?.header}>
                {local.icon}

                <Show when={local.title !== undefined}>
                  <Title class={local.classNames?.title}>{local.title}</Title>
                </Show>

                <Show when={showStageControls() || showCloseButton()}>
                  <Control class={local.classNames?.control}>
                    <Show when={showStageControls()}>
                      <StageControls />
                    </Show>

                    <Show when={showCloseButton()}>
                      <CloseTrigger
                        asChild={(triggerProps) => (
                          <Button
                            {...triggerProps()}
                            aria-label={m("floatingPanel.close")}
                            size="icon-xs"
                          >
                            <XIcon />
                          </Button>
                        )}
                        class={local.classNames?.closeTrigger}
                      />
                    </Show>
                  </Control>
                </Show>
              </Header>
            </DragTrigger>

            <Show when={local.children !== undefined}>
              <ScrollArea scrollFade={local.scrollFade ?? false}>
                <Body class={local.classNames?.body}>{local.children}</Body>
              </ScrollArea>
            </Show>

            <Show when={local.actions !== undefined}>
              <Footer class={local.classNames?.footer}>{local.actions}</Footer>
            </Show>

            <Show when={local.resizable ?? true}>
              <For each={resizeAxes}>
                {(axis) => (
                  <ResizeTrigger
                    axis={axis}
                    class={local.classNames?.resizeTrigger}
                  />
                )}
              </For>
            </Show>
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
} from "@ark-ui/solid";

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
