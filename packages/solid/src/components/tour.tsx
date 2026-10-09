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
import {
  Tour as TourPrimitive,
  type UseTourReturn,
  useTour,
} from "@ark-ui/solid/tour";
import type { TourProps as BaseTourProps } from "@pisagor/props";
import { dialogRecipe, tourRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "../internal/icons";
import { createContext } from "../utils";
import { Button } from "./button";
import type {
  DialogBodyProps,
  DialogFooterProps,
  DialogHeaderProps,
} from "./dialog";
import { ScrollArea } from "./scroll-area";

// #region Context
const { Context: TourStylesContext, useStyles: useTourStyles } =
  createSlotRecipeContext({ name: "Tour", recipe: tourRecipe });

/** Non-style tour state (Ark tour machine + start handler). */
interface TourState {
  readonly handleStart: () => void;
  readonly tour: UseTourReturn;
}

const { TourStateContext, useTourState } =
  createContext("TourState")<TourState>();

/** Returns the nearest tour styles + state (getters stay reactive). */
export function useTourContext() {
  const styles = useTourStyles();
  const state = useTourState();
  return {
    handleStart: state.handleStart,
    get slots() {
      return styles.slots;
    },
    tour: state.tour,
  };
}
// #endregion

export type TourStepType = TourStepDetails;
export type TourRootProps = Omit<TourPrimitiveRootProps, "tour">;

export interface TourProps extends TourRootProps, BaseTourProps {
  keyboardNavigation?: boolean;
  steps: TourStepDetails[];
  onStatusChange?: (details: { status: string }) => void;
  onStepChange?: (details: { stepId: string | null }) => void;
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

  const slots = createMemo(() => (local.recipe ?? tourRecipe)());

  return (
    <TourStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <TourStateContext value={{ handleStart, tour }}>
        <TourPrimitive.Root {...rest} tour={tour}>
          {local.children}
        </TourPrimitive.Root>
      </TourStateContext>
    </TourStylesContext>
  );
}

export function TourTrigger(props: TourTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick"]);
  const ctx = useTourContext();

  return (
    <ark.button
      {...rest}
      data-part="trigger"
      data-scope="tour"
      onClick={(e) => {
        if (typeof local.onClick === "function") local.onClick(e);
        ctx.handleStart();
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
  const ctx = useTourContext();
  const dialogSlots = () => (local.dialogRecipe ?? dialogRecipe)();

  return (
    <TourPrimitive.Backdrop
      {...rest}
      class={cn(dialogSlots().backdrop(), ctx.slots.backdrop(), local.class)}
    />
  );
}

export function TourPositioner(props: TourPositionerProps): JSX.Element {
  const ctx = useTourContext();
  return <TourPrimitive.Positioner {...props} class={ctx.slots.positioner()} />;
}

export function TourContent(props: TourContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showCloseButton",
    "children",
    "class",
  ]);
  const ctx = useTourContext();
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <Portal>
      <TourBackdrop />
      <TourPositioner>
        <TourPrimitive.Content
          {...rest}
          class={ctx.slots.content({ class: local.class })}
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
                    class: cn(ctx.slots.close(), ctx.slots.closeButton()),
                  })}
                  size="icon-md"
                  variant="ghost"
                >
                  <XIcon />
                  <span class={ctx.slots.closeLabel()}>Close</span>
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
        class={dialogSlots.body({ class: local.class })}
        data-part="body"
        data-scope="tour"
      />
    </ScrollArea>
  );
}

export function TourSpotlight(props: TourSpotlightProps): JSX.Element {
  const ctx = useTourContext();
  return <TourPrimitive.Spotlight {...props} class={ctx.slots.spotlight()} />;
}

export function TourHeader(props: DialogHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const dialogSlots = dialogRecipe();

  return (
    <ark.div
      {...rest}
      class={dialogSlots.header({ class: local.class })}
      data-part="header"
      data-scope="tour"
    >
      {local.children}
    </ark.div>
  );
}

export function TourTitle(props: TourTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const ctx = useTourContext();

  return (
    <TourPrimitive.Title
      {...rest}
      class={ctx.slots.title({ class: local.class })}
    >
      {ctx.tour().step?.title}
    </TourPrimitive.Title>
  );
}

export function TourDescription(props: TourDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const ctx = useTourContext();

  return (
    <TourPrimitive.Description
      {...rest}
      class={ctx.slots.description({ class: local.class })}
    >
      {ctx.tour().step?.description}
    </TourPrimitive.Description>
  );
}

export function TourProgressText(props: TourProgressTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const ctx = useTourContext();

  return (
    <TourPrimitive.ProgressText
      {...rest}
      class={ctx.slots.progressText({ class: local.class })}
    >
      {ctx.tour().getProgressText()}
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
            class: dialogSlots.footer({ class: local.class }),
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
  const ctx = useTourContext();
  const dialogSlots = dialogRecipe();
  const actions = () => ctx.tour().step?.actions ?? [];

  return (
    <Show when={actions().length > 0}>
      <TourPrimitive.Control
        {...rest}
        asChild={(controlProps) => (
          <ark.div
            {...controlProps({
              class: cn(
                dialogSlots.footer(),
                ctx.slots.actions({ class: local.class }),
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
  const ctx = useTourContext();
  const prevAction = () =>
    ctx.tour().step?.actions?.find((action) => action.action === "prev");

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
  const ctx = useTourContext();
  const action = () =>
    ctx
      .tour()
      .step?.actions?.find(
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

export type {
  TourActionTriggerProps,
  TourCloseTriggerProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourTitleProps,
} from "@ark-ui/solid/tour";

export const Tour = Object.assign(TourRoot, {
  Actions: TourActions,
  ActionTrigger: TourActionTrigger,
  Backdrop: TourBackdrop,
  Body: TourBody,
  CloseTrigger: TourCloseTrigger,
  Content: TourContent,
  Description: TourDescription,
  Footer: TourFooter,
  Header: TourHeader,
  NextStep: TourNextStep,
  Positioner: TourPositioner,
  PreviousStep: TourPreviousStep,
  ProgressText: TourProgressText,
  Spotlight: TourSpotlight,
  Title: TourTitle,
  Trigger: TourTrigger,
});
