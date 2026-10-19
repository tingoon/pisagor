import { Portal, Tour as TourPrimitive, ark, useTour } from "@ark-ui/react";
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
} from "@ark-ui/react";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import type { TourRootContract } from "@pisagor/contracts";
import type { TourRecipeSlot } from "@pisagor/recipes";
import { tourRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { useEffect } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
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

export type TourHeaderProps = ComponentPropsWithRef<"div">;

export type TourBodyProps = ComponentPropsWithRef<"div">;

export interface TourProps
  extends
    UseTourProps,
    Omit<TourRootPrimitiveProps, "children" | "tour">,
    TourRootContract {
  /** Page content rendered next to the trigger (usually the step targets). */
  children?: ReactNode;
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
  /** Element that starts the tour when clicked. */
  trigger?: ReactNode;
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

const ArrowTip = withContext<TourArrowTipProps>(TourPrimitive.ArrowTip, {
  name: "ArrowTip",
});

const Arrow = withContext<TourArrowProps>(TourPrimitive.Arrow, {
  defaultProps: {
    children: <ArrowTip />,
    style: {
      "--arrow-background": "var(--background)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
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
function CloseLabel() {
  const { m } = useLocale();
  const { slots } = useStyles();

  return <span className={slots.closeLabel()}>{m("tour.close")}</span>;
}

export function TourShorthand({
  children,
  classNames,
  immediate,
  lazyMount,
  onExitComplete,
  present,
  recipe,
  showArrow = false,
  showCloseButton = true,
  skipAnimationOnMount,
  trigger,
  unmountOnExit,
  ...tourProps
}: TourProps) {
  const tour = useTour(tourProps);
  const isOpen = tour.open;

  // Spotlight offsets are measured against the body.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.classList.add("relative");

    return () => {
      document.body.classList.remove("relative");
    };
  }, [isOpen]);

  return (
    <Root
      immediate={immediate}
      lazyMount={lazyMount}
      onExitComplete={onExitComplete}
      present={present}
      recipe={recipe}
      skipAnimationOnMount={skipAnimationOnMount}
      tour={tour}
      unmountOnExit={unmountOnExit}
    >
      {trigger !== undefined && (
        <ark.button asChild onClick={() => tour.start()}>
          {trigger}
        </ark.button>
      )}

      {children}

      <Portal>
        <Backdrop className={classNames?.backdrop} />
        <Spotlight className={classNames?.spotlight} />

        <Positioner className={classNames?.positioner}>
          <Content className={classNames?.content}>
            {showArrow && (
              <Arrow className={classNames?.arrow}>
                <ArrowTip className={classNames?.arrowTip} />
              </Arrow>
            )}

            <Header className={classNames?.header}>
              <ProgressText className={classNames?.progressText} />
              <Title className={classNames?.title} />
              <Description className={classNames?.description} />
            </Header>

            <TourPrimitive.Actions>
              {(actions) =>
                actions.length > 0 && (
                  <Control className={classNames?.control}>
                    {actions.map((action) => (
                      <ActionTrigger
                        action={action}
                        asChild
                        className={classNames?.actionTrigger}
                        key={action.label}
                      >
                        <Button
                          size="sm"
                          variant={
                            action.action === "dismiss" ||
                            action.action === "prev"
                              ? "outline"
                              : "default"
                          }
                        >
                          {action.action === "prev" && <CaretLeftIcon />}
                          {action.label}
                          {action.action === "next" && <CaretRightIcon />}
                        </Button>
                      </ActionTrigger>
                    ))}
                  </Control>
                )
              }
            </TourPrimitive.Actions>

            {showCloseButton && (
              <InlineCloseTrigger asChild className={classNames?.close}>
                <Button
                  className={classNames?.closeButton}
                  size="icon-md"
                  variant="ghost"
                >
                  <XIcon />
                  <CloseLabel />
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

export { useTour, useTourContext } from "@ark-ui/react";

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
} from "@ark-ui/react";

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
