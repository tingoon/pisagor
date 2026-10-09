import { ark } from "@ark-ui/solid/factory";
import type {
  FloatingPanelCloseTriggerProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelBodyProps as FloatingPanelPrimitiveBodyProps,
  FloatingPanelContentProps as FloatingPanelPrimitiveContentProps,
  FloatingPanelRootProps as FloatingPanelPrimitiveRootProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/solid/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/solid/floating-panel";
import type { FloatingPanelProps as BaseFloatingPanelRootProps } from "@pisagor/props";
import { floatingPanelRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps, useContext } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { ArrowsOutIcon, CornersInIcon, MinusIcon } from "../internal/icons";
import { Button, type ButtonProps } from "./button";
import { ScrollArea } from "./scroll-area";

// #region Context
const { Context: FloatingPanelStylesContext } = createSlotRecipeContext({
  name: "FloatingPanel",
  recipe: floatingPanelRecipe,
});

/** Parts also render standalone, so styles fall back to the default recipe. */
function useFloatingPanelSlots() {
  const styles = useContext(FloatingPanelStylesContext);
  return () => styles?.slots ?? floatingPanelRecipe();
}
// #endregion

export interface LocalFloatingPanelRootProps
  extends FloatingPanelPrimitiveRootProps,
    BaseFloatingPanelRootProps {}

export interface FloatingPanelContentProps
  extends FloatingPanelPrimitiveContentProps {
  resizable?: boolean;
}

export type FloatingPanelMinimizeProps = Omit<
  FloatingPanelStageTriggerProps,
  "stage"
> &
  ButtonProps;
export type FloatingPanelMaximizeProps = FloatingPanelMinimizeProps;
export type FloatingPanelRestoreProps = FloatingPanelMinimizeProps;

export interface FloatingPanelBodyProps
  extends FloatingPanelPrimitiveBodyProps {
  scrollFade?: boolean;
}

export type FloatingPanelFooterProps = ComponentProps<typeof ark.div>;

export function FloatingPanelRoot(
  props: LocalFloatingPanelRootProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);
  const slots = createMemo(() => (local.recipe ?? floatingPanelRecipe)());

  return (
    <FloatingPanelStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <FloatingPanelPrimitive.Root {...rest} />
    </FloatingPanelStylesContext>
  );
}

export function FloatingPanelTrigger(
  props: FloatingPanelTriggerProps,
): JSX.Element {
  return <FloatingPanelPrimitive.Trigger {...props} />;
}

export function FloatingPanelContent(
  props: FloatingPanelContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "resizable", "class"]);
  const slots = useFloatingPanelSlots();
  const resizable = () => local.resizable ?? true;

  return (
    <Portal>
      <FloatingPanelPrimitive.Positioner class={slots().positioner()}>
        <FloatingPanelPrimitive.Content
          {...rest}
          class={slots().content({ class: local.class })}
        >
          {local.children}
          <Show when={resizable()}>
            <FloatingPanelResizeTrigger axis="n" />
            <FloatingPanelResizeTrigger axis="e" />
            <FloatingPanelResizeTrigger axis="w" />
            <FloatingPanelResizeTrigger axis="s" />
            <FloatingPanelResizeTrigger axis="ne" />
            <FloatingPanelResizeTrigger axis="se" />
            <FloatingPanelResizeTrigger axis="sw" />
            <FloatingPanelResizeTrigger axis="nw" />
          </Show>
        </FloatingPanelPrimitive.Content>
      </FloatingPanelPrimitive.Positioner>
    </Portal>
  );
}

export function FloatingPanelDragTrigger(
  props: FloatingPanelDragTriggerProps,
): JSX.Element {
  return <FloatingPanelPrimitive.DragTrigger {...props} />;
}

export function FloatingPanelHeader(
  props: FloatingPanelHeaderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFloatingPanelSlots();

  return (
    <FloatingPanelDragTrigger>
      <FloatingPanelPrimitive.Header
        {...rest}
        class={slots().header({ class: local.class })}
      >
        {local.children}
      </FloatingPanelPrimitive.Header>
    </FloatingPanelDragTrigger>
  );
}

export function FloatingPanelControl(
  props: FloatingPanelControlProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFloatingPanelSlots();

  return (
    <FloatingPanelPrimitive.Control
      {...rest}
      class={slots().control({ class: local.class })}
    >
      {local.children}
    </FloatingPanelPrimitive.Control>
  );
}

export function FloatingPanelMinimize(
  props: FloatingPanelMinimizeProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);
  return (
    <FloatingPanelPrimitive.StageTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          aria-label="Minimize"
          size={local.size ?? "icon-xs"}
          variant={local.variant ?? "ghost"}
        >
          {local.children ?? <MinusIcon />}
        </Button>
      )}
      stage="minimized"
    />
  );
}

export function FloatingPanelMaximize(
  props: FloatingPanelMaximizeProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);
  return (
    <FloatingPanelPrimitive.StageTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          aria-label="Maximize"
          size={local.size ?? "icon-xs"}
          variant={local.variant ?? "ghost"}
        >
          {local.children ?? <ArrowsOutIcon />}
        </Button>
      )}
      stage="maximized"
    />
  );
}

export function FloatingPanelRestore(
  props: FloatingPanelRestoreProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);
  const slots = useFloatingPanelSlots();

  return (
    <FloatingPanelPrimitive.StageTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          aria-label="Restore"
          size={local.size ?? "icon-xs"}
          variant={local.variant ?? "outline"}
        >
          {local.children ?? (
            <>
              <CornersInIcon class={slots().maximizedIcon()} />
              <ArrowsOutIcon class={slots().minimizedIcon()} />
            </>
          )}
        </Button>
      )}
      stage="default"
    />
  );
}

export function FloatingPanelTitle(
  props: FloatingPanelTitleProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFloatingPanelSlots();

  return (
    <FloatingPanelPrimitive.Title
      {...rest}
      class={slots().title({ class: local.class })}
    >
      {local.children}
    </FloatingPanelPrimitive.Title>
  );
}

export function FloatingPanelResizeTrigger(
  props: FloatingPanelResizeTriggerProps,
): JSX.Element {
  return <FloatingPanelPrimitive.ResizeTrigger {...props} />;
}

export function FloatingPanelStageTrigger(
  props: FloatingPanelStageTriggerProps,
): JSX.Element {
  return <FloatingPanelPrimitive.StageTrigger {...props} />;
}

export function FloatingPanelCloseTrigger(
  props: FloatingPanelCloseTriggerProps,
): JSX.Element {
  return <FloatingPanelPrimitive.CloseTrigger {...props} />;
}

export function FloatingPanelBody(props: FloatingPanelBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "children", "class"]);
  const slots = useFloatingPanelSlots();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <FloatingPanelPrimitive.Body
        {...rest}
        class={slots().body({ class: local.class })}
      >
        {local.children}
      </FloatingPanelPrimitive.Body>
    </ScrollArea>
  );
}

export function FloatingPanelFooter(
  props: FloatingPanelFooterProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFloatingPanelSlots();

  return (
    <ark.div
      {...rest}
      class={slots().footer({ class: local.class })}
      data-part="footer"
      data-scope="floating-panel"
    >
      {local.children}
    </ark.div>
  );
}

export type {
  FloatingPanelCloseTriggerProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelRootProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/solid/floating-panel";

export const FloatingPanel = Object.assign(FloatingPanelRoot, {
  Body: FloatingPanelBody,
  CloseTrigger: FloatingPanelCloseTrigger,
  Content: FloatingPanelContent,
  Control: FloatingPanelControl,
  DragTrigger: FloatingPanelDragTrigger,
  Footer: FloatingPanelFooter,
  Header: FloatingPanelHeader,
  Maximize: FloatingPanelMaximize,
  Minimize: FloatingPanelMinimize,
  ResizeTrigger: FloatingPanelResizeTrigger,
  Restore: FloatingPanelRestore,
  StageTrigger: FloatingPanelStageTrigger,
  Title: FloatingPanelTitle,
  Trigger: FloatingPanelTrigger,
});
