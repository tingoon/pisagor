import {
  type HTMLArkProps,
  Tour as TourPrimitive,
  ark,
  useTour,
} from "@ark-ui/solid";
import type {
  TourActionTriggerProps,
  TourArrowProps,
  TourArrowTipProps,
  TourBackdropProps,
  TourCloseTriggerProps,
  TourContentProps,
  TourControlProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourRootProps as TourRootPrimitiveProps,
  TourSpotlightProps,
  TourStepDetails,
  TourTitleProps,
  UseTourProps,
} from "@ark-ui/solid";
import type { TourRootContract } from "@pisagor/contracts";
import type { TourRecipeSlot } from "@pisagor/recipes";
import { tourRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createEffect, For, onCleanup, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CaretLeftIcon,
  CaretRightIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Tour",
  recipe: tourRecipe,
});
// #endregion

// #region Types
export type TourStepType = TourStepDetails;

export type TourRootProps = TourRootPrimitiveProps & TourRootContract;

export type TourHeaderProps = HTMLArkProps<"div">;

export type TourBodyProps = HTMLArkProps<"div">;

export interface TourProps
  extends
    UseTourProps,
    Omit<TourRootPrimitiveProps, "children" | "tour">,
    TourRootContract {
  /** Page content rendered next to the trigger (usually the step targets). */
  children?: JSX.Element;
  /** Per-slot class name overrides. */
  classNames?: Partial<Record<TourRecipeSlot, string>>;
  /**
   * Whether to render an arrow on tooltip steps.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Element that starts the tour when clicked (render fn preferred). */
  trigger?: DialogTriggerRender;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<TourRootProps>(TourPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Backdrop = withContext<TourBackdropProps>(TourPrimitive.Backdrop, {
  name: "Backdrop",
});

const Spotlight = withContext<TourSpotlightProps>(TourPrimitive.Spotlight, {
  name: "Spotlight",
});

const Positioner = withContext<TourPositionerProps>(TourPrimitive.Positioner, {
  name: "Positioner",
});

const Content = withContext<TourContentProps>(TourPrimitive.Content, {
  name: "Content",
});

const Arrow = withContext<TourArrowProps>(TourPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--background)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ArrowTip = withContext<TourArrowTipProps>(TourPrimitive.ArrowTip, {
  name: "ArrowTip",
});

const Header = withContext<TourHeaderProps>("div", { name: "Header" });

const Title = withContext<TourTitleProps>(TourPrimitive.Title, {
  name: "Title",
});

const Description = withContext<TourDescriptionProps>(
  TourPrimitive.Description,
  { name: "Description" },
);

const ProgressText = withContext<TourProgressTextProps>(
  TourPrimitive.ProgressText,
  { name: "ProgressText" },
);

const Body = withContext<TourBodyProps>("div", { name: "Body" });

const Control = withContext<TourControlProps>(TourPrimitive.Control, {
  name: "Control",
});

const ActionTrigger = withContext<TourActionTriggerProps>(
  TourPrimitive.ActionTrigger,
  { name: "ActionTrigger" },
);

const CloseTrigger = withContext<TourCloseTriggerProps>(
  TourPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<TourCloseTriggerProps>(
  TourPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "close" },
);
// #endregion

// #region Shorthand
function CloseLabel(): JSX.Element {
  const { m } = useLocale();
  const styles = useStyles();

  return <span class={styles.slots.closeLabel()}>{m("tour.close")}</span>;
}

export function TourShorthand(props: TourProps): JSX.Element {
  const [local, rootProps, tourProps] = splitProps(
    props,
    ["children", "classNames", "showArrow", "showCloseButton", "trigger"],
    [
      "immediate",
      "lazyMount",
      "onExitComplete",
      "present",
      "recipe",
      "skipAnimationOnMount",
      "unmountOnExit",
    ],
  );
  const tour = useTour(tourProps);

  // Spotlight offsets are measured against the body.
  createEffect(() => {
    if (!tour().open) {
      return;
    }

    document.body.classList.add("relative");
    onCleanup(() => document.body.classList.remove("relative"));
  });

  return (
    <Root {...rootProps} tour={tour}>
      <Show when={local.trigger !== undefined}>
        <ark.button
          asChild={renderTrigger(local.trigger)}
          onClick={() => tour().start()}
        />
      </Show>

      {local.children}

      <Portal>
        <Backdrop class={local.classNames?.backdrop} />
        <Spotlight class={local.classNames?.spotlight} />

        <Positioner class={local.classNames?.positioner}>
          <Content class={local.classNames?.content}>
            <Show when={local.showArrow ?? false}>
              <Arrow class={local.classNames?.arrow}>
                <ArrowTip class={local.classNames?.arrowTip} />
              </Arrow>
            </Show>

            <Header class={local.classNames?.header}>
              <ProgressText class={local.classNames?.progressText} />
              <Title class={local.classNames?.title} />
              <Description class={local.classNames?.description} />
            </Header>

            <TourPrimitive.Actions>
              {(actions) => (
                <Show when={actions().length > 0}>
                  <Control class={local.classNames?.control}>
                    <For each={actions()}>
                      {(action) => (
                        <ActionTrigger
                          action={action}
                          asChild={(triggerProps) => (
                            <Button
                              {...triggerProps()}
                              size="sm"
                              variant={
                                action.action === "dismiss" ||
                                action.action === "prev"
                                  ? "outline"
                                  : "default"
                              }
                            >
                              <Show when={action.action === "prev"}>
                                <CaretLeftIcon />
                              </Show>
                              {action.label}
                              <Show when={action.action === "next"}>
                                <CaretRightIcon />
                              </Show>
                            </Button>
                          )}
                          class={local.classNames?.actionTrigger}
                        />
                      )}
                    </For>
                  </Control>
                </Show>
              )}
            </TourPrimitive.Actions>

            <Show when={local.showCloseButton ?? true}>
              <InlineCloseTrigger
                asChild={(triggerProps) => (
                  <Button
                    {...triggerProps()}
                    class={local.classNames?.closeButton}
                    size="icon-md"
                    variant="ghost"
                  >
                    <XIcon />
                    <CloseLabel />
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

export { useTour, useTourContext } from "@ark-ui/solid";

export type {
  TourActionTriggerProps,
  TourArrowProps,
  TourArrowTipProps,
  TourBackdropProps,
  TourCloseTriggerProps,
  TourContentProps,
  TourControlProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourTitleProps,
  UseTourProps,
  UseTourReturn,
} from "@ark-ui/solid";

export const Tour = Object.assign(TourShorthand, {
  ActionTrigger,
  Actions: TourPrimitive.Actions,
  Arrow,
  ArrowTip,
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Control,
  Description,
  Header,
  Positioner,
  ProgressText,
  Root,
  Spotlight,
  Title,
});
