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
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { ArrowsOutIcon, CornersInIcon, MinusIcon } from "../../internal/icons";
import { Button, type ButtonProps } from "../button";
import { ScrollArea } from "../scroll-area";
import { FloatingPanelContext, useFloatingPanel } from "./floating-panel.context";

export interface FloatingPanelRootProps extends FloatingPanelPrimitiveRootProps {
  recipe?: typeof floatingPanelRecipe;
}

export interface FloatingPanelContentProps extends FloatingPanelPrimitiveContentProps {
  resizable?: boolean;
}

export type FloatingPanelMinimizeProps = Omit<FloatingPanelStageTriggerProps, "stage"> &
  ButtonProps;
export type FloatingPanelMaximizeProps = FloatingPanelMinimizeProps;
export type FloatingPanelRestoreProps = FloatingPanelMinimizeProps;

export interface FloatingPanelBodyProps extends FloatingPanelPrimitiveBodyProps {
  scrollFade?: boolean;
}

export type FloatingPanelFooterProps = ComponentProps<typeof ark.div>;

export function FloatingPanelRoot(props: FloatingPanelRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe"]);
  const slots = () => (local.recipe ?? floatingPanelRecipe)();

  return (
    <FloatingPanelContext value={{ slots: slots() }}>
      <FloatingPanelPrimitive.Root {...rest}>{local.children}</FloatingPanelPrimitive.Root>
    </FloatingPanelContext>
  );
}

export function FloatingPanelTrigger(props: FloatingPanelTriggerProps): JSX.Element {
  return <FloatingPanelPrimitive.Trigger {...props} />;
}

export function FloatingPanelContent(props: FloatingPanelContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "resizable", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();
  const resizable = () => local.resizable ?? true;

  return (
    <Portal>
      <FloatingPanelPrimitive.Positioner class={slots().positioner()}>
        <FloatingPanelPrimitive.Content
          {...rest}
          class={slots().content({ class: cn(local.class) })}
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

export function FloatingPanelDragTrigger(props: FloatingPanelDragTriggerProps): JSX.Element {
  return <FloatingPanelPrimitive.DragTrigger {...props} />;
}

export function FloatingPanelHeader(props: FloatingPanelHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

  return (
    <FloatingPanelDragTrigger>
      <FloatingPanelPrimitive.Header {...rest} class={slots().header({ class: cn(local.class) })}>
        {local.children}
      </FloatingPanelPrimitive.Header>
    </FloatingPanelDragTrigger>
  );
}

export function FloatingPanelControl(props: FloatingPanelControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

  return (
    <FloatingPanelPrimitive.Control {...rest} class={slots().control({ class: cn(local.class) })}>
      {local.children}
    </FloatingPanelPrimitive.Control>
  );
}

export function FloatingPanelMinimize(props: FloatingPanelMinimizeProps): JSX.Element {
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

export function FloatingPanelMaximize(props: FloatingPanelMaximizeProps): JSX.Element {
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

export function FloatingPanelRestore(props: FloatingPanelRestoreProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "children"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

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

export function FloatingPanelTitle(props: FloatingPanelTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

  return (
    <FloatingPanelPrimitive.Title {...rest} class={slots().title({ class: cn(local.class) })}>
      {local.children}
    </FloatingPanelPrimitive.Title>
  );
}

export function FloatingPanelResizeTrigger(props: FloatingPanelResizeTriggerProps): JSX.Element {
  return <FloatingPanelPrimitive.ResizeTrigger {...props} />;
}

export function FloatingPanelStageTrigger(props: FloatingPanelStageTriggerProps): JSX.Element {
  return <FloatingPanelPrimitive.StageTrigger {...props} />;
}

export function FloatingPanelCloseTrigger(props: FloatingPanelCloseTriggerProps): JSX.Element {
  return <FloatingPanelPrimitive.CloseTrigger {...props} />;
}

export function FloatingPanelBody(props: FloatingPanelBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "children", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <FloatingPanelPrimitive.Body {...rest} class={slots().body({ class: cn(local.class) })}>
        {local.children}
      </FloatingPanelPrimitive.Body>
    </ScrollArea>
  );
}

export function FloatingPanelFooter(props: FloatingPanelFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const ctx = useFloatingPanel();
  const slots = () => ctx?.slots ?? floatingPanelRecipe();

  return (
    <ark.div
      {...rest}
      class={slots().footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="floating-panel"
    >
      {local.children}
    </ark.div>
  );
}
