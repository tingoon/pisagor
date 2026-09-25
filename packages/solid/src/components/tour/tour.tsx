import { ark } from "@ark-ui/solid/factory";
import type {
  TourActionTriggerProps,
  TourCloseTriggerProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourContentProps as TourPrimitiveContentProps,
  TourRootProps as TourPrimitiveRootProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourStepDetails,
  TourTitleProps,
} from "@ark-ui/solid/tour";
import { Tour as TourPrimitive, useTour } from "@ark-ui/solid/tour";
import { dialogRecipe } from "@pisagor/recipes/dialog";
import { tourRecipe } from "@pisagor/recipes/tour";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import {
  createEffect,
  createSignal,
  For,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "../../internal/icons";
import { Button } from "../button";
import type {
  DialogBodyProps,
  DialogFooterProps,
  DialogHeaderProps,
} from "../dialog/dialog";
import { ScrollArea } from "../scroll-area";
import { TourContext, useTourContext } from "./tour.context";

export type TourStepType = TourStepDetails;
export type TourRootProps = Omit<TourPrimitiveRootProps, "tour">;

export interface TourProps extends TourRootProps {
  keyboardNavigation?: boolean;
  steps: TourStepDetails[];
  onStatusChange?: (details: { status: string }) => void;
  onStepChange?: (details: { stepId: string | null }) => void;
  recipe?: typeof tourRecipe;
}

export type TourTriggerProps = ComponentProps<typeof ark.button>;

export interface TourBackdropProps
  extends ComponentProps<typeof TourPrimitive.Backdrop> {
  dialogRecipe?: typeof dialogRecipe;
}

export interface TourContentProps extends TourPrimitiveContentProps {
  showCloseButton?: boolean;
}

export function TourRoot(props: TourProps): JSX.Element {
  const [local, rest] = splitProps(props, ["steps", "recipe", "children"]);
  const [isStarted, setIsStarted] = createSignal(false);
  const tour = useTour(() => ({ steps: local.steps ?? [] }));
  const slots = () => (local.recipe ?? tourRecipe)();

  createEffect(() => {
    if (isStarted()) {
      document.body.classList.add("relative");
    } else {
      document.body.classList.remove("relative");
    }
    onCleanup(() => document.body.classList.remove("relative"));
  });

  const handleStart = () => {
    setIsStarted(true);
    tour().start();
  };

  return (
    <TourContext value={{ handleStart, slots: slots(), tour }}>
      <TourPrimitive.Root {...rest} tour={tour}>
        {local.children}
      </TourPrimitive.Root>
    </TourContext>
  );
}

export function TourTrigger(props: TourTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick"]);
  const { handleStart } = useTourContext();

  return (
    <ark.button
      {...rest}
      data-part="trigger"
      data-scope="tour"
      onClick={(e) => {
        if (typeof local.onClick === "function") local.onClick(e);
        handleStart();
      }}
      type="button"
    />
  );
}

export function TourActionTrigger(props: TourActionTriggerProps): JSX.Element {
  return <TourPrimitive.ActionTrigger {...props} />;
}

export function TourBackdrop(props: TourBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "dialogRecipe"]);
  const { slots } = useTourContext();
  const dialogSlots = () => (local.dialogRecipe ?? dialogRecipe)();

  return (
    <TourPrimitive.Backdrop
      {...rest}
      class={cn(dialogSlots().backdrop(), slots.backdrop(), local.class)}
    />
  );
}

export function TourPositioner(props: TourPositionerProps): JSX.Element {
  const { slots } = useTourContext();
  return <TourPrimitive.Positioner {...props} class={slots.positioner()} />;
}

export function TourContent(props: TourContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showCloseButton",
    "children",
    "class",
  ]);
  const { slots } = useTourContext();
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <Portal>
      <TourBackdrop />
      <TourPositioner>
        <TourPrimitive.Content
          {...rest}
          class={slots.content({ class: cn(local.class) })}
        >
          <Show
            fallback={
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
            }
            when={local.children}
          >
            {local.children}
          </Show>
          <Show when={showCloseButton()}>
            <TourCloseTrigger
              asChild={(triggerProps) => (
                <Button
                  {...triggerProps({
                    class: cn(slots.close(), slots.closeButton()),
                  })}
                  size="icon-md"
                  variant="ghost"
                >
                  <XIcon />
                  <span class={slots.closeLabel()}>Close</span>
                </Button>
              )}
            />
          </Show>
        </TourPrimitive.Content>
      </TourPositioner>
      <TourSpotlight />
    </Portal>
  );
}

export function TourBody(props: DialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const dialogSlots = dialogRecipe();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={dialogSlots.body({ class: cn(local.class) })}
        data-part="body"
        data-scope="tour"
      />
    </ScrollArea>
  );
}

export function TourSpotlight(props: TourSpotlightProps): JSX.Element {
  const { slots } = useTourContext();
  return <TourPrimitive.Spotlight {...props} class={slots.spotlight()} />;
}

export function TourHeader(props: DialogHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const dialogSlots = dialogRecipe();

  return (
    <ark.div
      {...rest}
      class={dialogSlots.header({ class: cn(local.class) })}
      data-part="header"
      data-scope="tour"
    >
      {local.children}
    </ark.div>
  );
}

export function TourTitle(props: TourTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.Title
      {...rest}
      class={slots.title({ class: cn(local.class) })}
    >
      {tour().step?.title}
    </TourPrimitive.Title>
  );
}

export function TourDescription(props: TourDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.Description
      {...rest}
      class={slots.description({ class: cn(local.class) })}
    >
      {tour().step?.description}
    </TourPrimitive.Description>
  );
}

export function TourProgressText(props: TourProgressTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots, tour } = useTourContext();

  return (
    <TourPrimitive.ProgressText
      {...rest}
      class={slots.progressText({ class: cn(local.class) })}
    >
      {tour().getProgressText()}
    </TourPrimitive.ProgressText>
  );
}

export function TourCloseTrigger(props: TourCloseTriggerProps): JSX.Element {
  return <TourPrimitive.CloseTrigger {...props} />;
}

export function TourFooter(props: DialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const dialogSlots = dialogRecipe();

  return (
    <TourPrimitive.Control
      {...rest}
      asChild={(controlProps) => (
        <ark.div
          {...controlProps({
            class: dialogSlots.footer({ class: cn(local.class) }),
          })}
          data-part="control"
          data-scope="tour"
        >
          {local.children}
        </ark.div>
      )}
    />
  );
}

export function TourActions(props: DialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots, tour } = useTourContext();
  const dialogSlots = dialogRecipe();
  const actions = () => tour().step?.actions ?? [];

  return (
    <Show when={actions().length > 0}>
      <TourPrimitive.Control
        {...rest}
        asChild={(controlProps) => (
          <ark.div
            {...controlProps({
              class: cn(
                dialogSlots.footer(),
                slots.actions({ class: cn(local.class) }),
              ),
            })}
            data-part="actions"
            data-scope="tour"
          >
            <For each={actions()}>
              {(action) => (
                <TourActionTrigger
                  action={action}
                  asChild={(triggerProps) => (
                    <Button
                      {...triggerProps()}
                      size="sm"
                      variant={
                        action.action === "dismiss" || action.action === "prev"
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
                />
              )}
            </For>
          </ark.div>
        )}
      />
    </Show>
  );
}

export function TourPreviousStep(
  props: Omit<TourActionTriggerProps, "action">,
): JSX.Element {
  const { tour } = useTourContext();
  const prevAction = () =>
    tour().step?.actions?.find((action) => action.action === "prev");

  return (
    <Show when={prevAction()}>
      {(action) => (
        <TourActionTrigger
          {...props}
          action={action()}
          asChild={(triggerProps) => (
            <Button {...triggerProps()} size="sm" variant="outline">
              <CaretLeftIcon />
              {action().label}
            </Button>
          )}
        />
      )}
    </Show>
  );
}

export function TourNextStep(
  props: Omit<TourActionTriggerProps, "action">,
): JSX.Element {
  const { tour } = useTourContext();
  const action = () =>
    tour().step?.actions?.find(
      (a) => a.action === "next" || a.action === "dismiss",
    );

  return (
    <Show when={action()}>
      {(act) => (
        <TourActionTrigger
          {...props}
          action={act()}
          asChild={(triggerProps) => (
            <Button {...triggerProps()} size="sm">
              {act().label}
              <Show when={act().action === "next"}>
                <CaretRightIcon />
              </Show>
            </Button>
          )}
        />
      )}
    </Show>
  );
}
