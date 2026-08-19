import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  Tour as TourPrimitive,
  type TourStepDetails,
  type UseTourReturn,
  useTour,
} from "@ark-ui/react/tour";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import {
  tourActionsVariants,
  tourContentVariants,
  tourDescriptionVariants,
  tourInline2Variants,
  tourInline3Variants,
  tourInlineVariants,
  tourOverlayVariants,
  tourPositionerVariants,
  tourProgressTextVariants,
  tourSpotlightVariants,
  tourTitleVariants,
} from "@pisagor/styles/ui/tour";
import { cn } from "@pisagor/utils";
import type { ComponentProps, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Button } from "../button";
import {
  Dialog,
  type DialogBodyProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogOverlayProps,
  dialogOverlayVariants,
} from "../dialog";

// #region Types
export type TourStepType = TourStepDetails;

interface TourProviderProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** The tour instance */
  tour: UseTourReturn;
  testId?: string;
}

interface TourProps extends Omit<ComponentProps<typeof TourPrimitive.Root>, "tour">, WithTestId {
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

interface TourTriggerProps extends ComponentProps<typeof ark.button> {}

interface TourContentProps extends ComponentProps<typeof TourPrimitive.Content> {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

/** Returns the nearest tour context. */
const [TourContext, useTourContext] = createContext<TourProviderProps>({
  name: "Tour",
});

export { useTourContext };

export function TourRoot({
  steps = [],
  lazyMount = true,
  unmountOnExit = true,
  testId,
  ...rest
}: TourProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };
  const [isStarted, setIsStarted] = useState(false);

  const tour = useTour({ steps });

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
    <TourContext value={{ handleStart, testId: dataTestId ?? testId, tour }}>
      <TourPrimitive.Root
        lazyMount={lazyMount}
        tour={tour}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </TourContext>
  );
}
TourRoot.displayName = "Tour";

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
TourTrigger.displayName = "Tour.Trigger";

export type TourActionTriggerProps = ComponentProps<typeof TourPrimitive.ActionTrigger>;

export function TourActionTrigger(props: TourActionTriggerProps) {
  return <TourPrimitive.ActionTrigger {...props} />;
}
TourActionTrigger.displayName = "Tour.ActionTrigger";

export function TourOverlay({ className, ...rest }: DialogOverlayProps) {
  return (
    <TourPrimitive.Backdrop
      {...rest}
      className={cn(dialogOverlayVariants(), tourOverlayVariants(), className)}
    />
  );
}
TourOverlay.displayName = "Tour.Overlay";

export function TourPositioner(props: ComponentProps<typeof TourPrimitive.Positioner>) {
  return <TourPrimitive.Positioner className={cn(tourPositionerVariants())} {...props} />;
}
TourPositioner.displayName = "Tour.Positioner";

export function TourContent({
  showCloseButton = true,
  className,
  children,
  ...rest
}: TourContentProps) {
  const { testId } = useTourContext();

  return (
    <Portal>
      <TourOverlay />
      <TourPositioner>
        <TourPrimitive.Content
          {...rest}
          className={cn(tourContentVariants(), className)}
          data-testid={testId}
        >
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
            <TourClose asChild className={tourInlineVariants()}>
              <Button className={tourInline2Variants()} size="icon-md" variant="ghost">
                <XIcon />

                <span className={tourInline3Variants()}>Close</span>
              </Button>
            </TourClose>
          )}
        </TourPrimitive.Content>
      </TourPositioner>

      <TourSpotlight />
    </Portal>
  );
}
TourContent.displayName = "Tour.Content";

export function TourBody(props: DialogBodyProps) {
  return <Dialog.Body dataPart="body" dataScope="tour" {...props} />;
}
TourBody.displayName = "Tour.Body";

export function TourSpotlight(props: ComponentProps<typeof TourPrimitive.Spotlight>) {
  return <TourPrimitive.Spotlight className={tourSpotlightVariants()} {...props} />;
}
TourSpotlight.displayName = "Tour.Spotlight";

export function TourHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="tour" {...props} />;
}
TourHeader.displayName = "Tour.Header";

export function TourTitle({ className, ...rest }: ComponentProps<typeof TourPrimitive.Title>) {
  const { tour } = useTourContext();

  return (
    <TourPrimitive.Title {...rest} className={cn(tourTitleVariants(), className)}>
      {tour.step?.title}
    </TourPrimitive.Title>
  );
}
TourTitle.displayName = "Tour.Title";

export function TourDescription({
  className,
  ...rest
}: ComponentProps<typeof TourPrimitive.Description>) {
  const { tour } = useTourContext();

  return (
    <TourPrimitive.Description {...rest} className={cn(tourDescriptionVariants(), className)}>
      {tour.step?.description}
    </TourPrimitive.Description>
  );
}
TourDescription.displayName = "Tour.Description";

export function TourProgressText({
  className,
  ...rest
}: ComponentProps<typeof TourPrimitive.ProgressText>) {
  const { tour } = useTourContext();

  return (
    <TourPrimitive.ProgressText {...rest} className={cn(tourProgressTextVariants(), className)}>
      {tour.getProgressText()}
    </TourPrimitive.ProgressText>
  );
}
TourProgressText.displayName = "Tour.ProgressText";

export function TourClose(props: ComponentProps<typeof TourPrimitive.CloseTrigger>) {
  return <TourPrimitive.CloseTrigger {...props} />;
}
TourClose.displayName = "Tour.Close";

export function TourFooter({ children, ...rest }: DialogFooterProps) {
  return (
    <TourPrimitive.Control {...rest} asChild>
      <Dialog.Footer dataPart="control" dataScope="tour">
        {children}
      </Dialog.Footer>
    </TourPrimitive.Control>
  );
}
TourFooter.displayName = "Tour.Footer";

export function TourActions({ className, ...rest }: DialogFooterProps) {
  const { tour } = useTourContext();

  const actions = tour.step?.actions ?? [];

  if (actions.length === 0) {
    return null;
  }

  return (
    <TourPrimitive.Control {...rest} asChild>
      <Dialog.Footer
        className={cn(tourActionsVariants(), className)}
        dataPart="actions"
        dataScope="tour"
      >
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
TourActions.displayName = "Tour.Actions";

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
TourPreviousStep.displayName = "Tour.PreviousStep";

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
TourNextStep.displayName = "Tour.NextStep";

// #endregion
