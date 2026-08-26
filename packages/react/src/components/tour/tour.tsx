import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Tour as TourPrimitive, type TourStepDetails, useTour } from "@ark-ui/react/tour";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import { dialogVariants } from "@pisagor/recipes/dialog";
import { tourVariants } from "@pisagor/recipes/tour";
import { cn } from "@pisagor/utils";
import type { ComponentProps, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../button";
import {
  Dialog,
  type DialogBackdropProps,
  type DialogBodyProps,
  type DialogFooterProps,
  type DialogHeaderProps,
} from "../dialog";
import { TourContext, useTourContext } from "./tour.context";

// #region Types
export type TourStepType = TourStepDetails;

export type TourRootProps = Omit<ComponentProps<typeof TourPrimitive.Root>, "tour">;

export interface TourProps extends TourRootProps {
  /** Whether to enable arrow key navigation between steps */
  keyboardNavigation?: boolean;
  /** Called when the tour status changes */
  onStatusChange?: (details: { status: string }) => void;
  /** Called when the current step changes */
  onStepChange?: (details: { stepId: string | null }) => void;
  /**
   * The steps to display in the tour
   *
   * @defaultValue []
   */
  steps: TourStepDetails[];
}

export interface TourTriggerProps extends ComponentProps<typeof ark.button> {}

export interface TourContentProps extends ComponentProps<typeof TourPrimitive.Content> {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export type TourActionTriggerProps = ComponentProps<typeof TourPrimitive.ActionTrigger>;

export type TourPositionerProps = ComponentProps<typeof TourPrimitive.Positioner>;

export type TourSpotlightProps = ComponentProps<typeof TourPrimitive.Spotlight>;

export type TourTitleProps = ComponentProps<typeof TourPrimitive.Title>;

export type TourDescriptionProps = ComponentProps<typeof TourPrimitive.Description>;

export type TourProgressTextProps = ComponentProps<typeof TourPrimitive.ProgressText>;

export type TourCloseTriggerProps = ComponentProps<typeof TourPrimitive.CloseTrigger>;
// #endregion

// #region Parts
export function TourRoot({
  steps = [],
  lazyMount = true,
  unmountOnExit = true,
  ...rest
}: TourProps) {
  const [isStarted, setIsStarted] = useState(false);

  const tour = useTour({ steps });

  const slots = useMemo(() => tourVariants(), []);

  useEffect(() => {
    if (isStarted) {
      document.body.classList.add("relative");
    } else {
      document.body.classList.remove("relative");
    }

    return () => {
      document.body.classList.remove("relative");
    };
  }, [isStarted]);

  const handleStart = useCallback(() => {
    setIsStarted(true);
    tour.start();
  }, [tour]);

  return (
    <TourContext value={{ handleStart, slots, tour }}>
      <TourPrimitive.Root
        lazyMount={lazyMount}
        tour={tour}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </TourContext>
  );
}

export function TourTrigger({ onClick, ...rest }: TourTriggerProps) {
  const { handleStart } = useTourContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    handleStart();
  };

  return (
    <ark.button
      {...rest}
      data-part="trigger"
      data-scope="tour"
      onClick={handleClick}
      type="button"
    />
  );
}

export function TourActionTrigger(props: TourActionTriggerProps) {
  return <TourPrimitive.ActionTrigger {...props} />;
}

export function TourBackdrop({ className, ...rest }: DialogBackdropProps) {
  const { slots } = useTourContext();
  const dialogSlots = useMemo(() => dialogVariants(), []);

  return (
    <TourPrimitive.Backdrop
      {...rest}
      className={cn(dialogSlots.backdrop(), slots.backdrop(), className)}
    />
  );
}

export function TourPositioner(props: TourPositionerProps) {
  const { slots } = useTourContext();

  return <TourPrimitive.Positioner className={slots.positioner()} {...props} />;
}

export function TourContent({
  showCloseButton = true,
  className,
  children,
  ...rest
}: TourContentProps) {
  const { slots } = useTourContext();

  return (
    <Portal>
      <TourBackdrop />
      <TourPositioner>
        <TourPrimitive.Content {...rest} className={slots.content({ className })}>
          {children ?? (
            <>
              <TourHeader>
                <TourTitle />
                <TourProgressText />
              </TourHeader>
              <TourBody>
                <TourDescription />
              </TourBody>
              <TourFooter>
                <TourPreviousStep />
                <TourNextStep />
              </TourFooter>
            </>
          )}

          {!!showCloseButton && (
            <TourCloseTrigger asChild className={slots.close()}>
              <Button className={slots.closeButton()} size="icon-md" variant="ghost">
                <XIcon />

                <span className={slots.closeLabel()}>Close</span>
              </Button>
            </TourCloseTrigger>
          )}
        </TourPrimitive.Content>
      </TourPositioner>

      <TourSpotlight />
    </Portal>
  );
}

export function TourBody(props: DialogBodyProps) {
  return <Dialog.Body dataPart="body" dataScope="tour" {...props} />;
}

export function TourSpotlight(props: TourSpotlightProps) {
  const { slots } = useTourContext();

  return <TourPrimitive.Spotlight className={slots.spotlight()} {...props} />;
}

export function TourHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="tour" {...props} />;
}

export function TourTitle({ className, ...rest }: TourTitleProps) {
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.Title {...rest} className={slots.title({ className })}>
      {tour.step?.title}
    </TourPrimitive.Title>
  );
}

export function TourDescription({ className, ...rest }: TourDescriptionProps) {
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.Description {...rest} className={slots.description({ className })}>
      {tour.step?.description}
    </TourPrimitive.Description>
  );
}

export function TourProgressText({ className, ...rest }: TourProgressTextProps) {
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.ProgressText {...rest} className={slots.progressText({ className })}>
      {tour.getProgressText()}
    </TourPrimitive.ProgressText>
  );
}

export function TourCloseTrigger(props: TourCloseTriggerProps) {
  return <TourPrimitive.CloseTrigger {...props} />;
}

export function TourFooter({ children, ...rest }: DialogFooterProps) {
  return (
    <TourPrimitive.Control {...rest} asChild>
      <Dialog.Footer dataPart="control" dataScope="tour">
        {children}
      </Dialog.Footer>
    </TourPrimitive.Control>
  );
}

export function TourActions({ className, ...rest }: DialogFooterProps) {
  const { slots, tour } = useTourContext();

  const actions = tour.step?.actions ?? [];

  if (actions.length === 0) {
    return null;
  }

  return (
    <TourPrimitive.Control {...rest} asChild>
      <Dialog.Footer className={slots.actions({ className })} dataPart="actions" dataScope="tour">
        {actions.map((action) => (
          <TourActionTrigger action={action} asChild key={action.label}>
            <Button
              size="sm"
              variant={
                action.action === "dismiss" || action.action === "prev" ? "outline" : "default"
              }
            >
              {action.action === "prev" && <CaretLeftIcon />}
              {action.label}
              {action.action === "next" && <CaretRightIcon />}
            </Button>
          </TourActionTrigger>
        ))}
      </Dialog.Footer>
    </TourPrimitive.Control>
  );
}

export function TourPreviousStep({ ...rest }: Omit<TourActionTriggerProps, "action">) {
  const { tour } = useTourContext();

  const prevAction = useMemo(
    () => tour.step?.actions?.find((action) => action.action === "prev"),
    [tour],
  );

  if (!prevAction) {
    return null;
  }

  return (
    <TourActionTrigger {...rest} action={prevAction} asChild>
      <Button size="sm" variant="outline">
        <CaretLeftIcon />
        {prevAction.label}
      </Button>
    </TourActionTrigger>
  );
}

export function TourNextStep({ ...rest }: Omit<TourActionTriggerProps, "action">) {
  const { tour } = useTourContext();

  const action = useMemo(
    () => tour.step?.actions?.find((a) => a.action === "next" || a.action === "dismiss"),
    [tour],
  );

  const actionType = useMemo(() => action?.action, [action]);

  if (!action) {
    return null;
  }

  return (
    <TourActionTrigger {...rest} action={action} asChild>
      <Button size="sm">
        {action.label}

        {actionType === "next" && <CaretRightIcon />}
      </Button>
    </TourActionTrigger>
  );
}
// #endregion

// #region Display Names
TourRoot.displayName = "Tour";
TourTrigger.displayName = "Tour.Trigger";
TourActionTrigger.displayName = "Tour.ActionTrigger";
TourBackdrop.displayName = "Tour.Backdrop";
TourPositioner.displayName = "Tour.Positioner";
TourContent.displayName = "Tour.Content";
TourBody.displayName = "Tour.Body";
TourSpotlight.displayName = "Tour.Spotlight";
TourHeader.displayName = "Tour.Header";
TourTitle.displayName = "Tour.Title";
TourDescription.displayName = "Tour.Description";
TourProgressText.displayName = "Tour.ProgressText";
TourCloseTrigger.displayName = "Tour.CloseTrigger";
TourFooter.displayName = "Tour.Footer";
TourActions.displayName = "Tour.Actions";
TourPreviousStep.displayName = "Tour.PreviousStep";
TourNextStep.displayName = "Tour.NextStep";
// #endregion
