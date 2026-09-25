import { ark } from "@ark-ui/solid/factory";
import { Presence } from "@ark-ui/solid/presence";
import { actionBarRecipe } from "@pisagor/recipes/action-bar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX, ParentProps } from "solid-js";
import { createEffect, createMemo, createSignal, For, onCleanup, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon } from "../../internal/icons";
import { Badge, type BadgeProps } from "../badge";
import { Button } from "../button";
import { Separator, type SeparatorProps } from "../separator";
import { ActionBarContext, type ActionBarContextValue, useActionBar } from "./action-bar.context";

interface ActionBarActionItem {
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ActionBarProps extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit"> {
  recipe?: typeof actionBarRecipe;
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  positioning?: ActionBarContextValue["positioning"];
  actions?: ActionBarActionItem[];
  count?: number;
  onOpenChange?: (open: boolean) => void;
}

export type ActionBarTriggerProps = ComponentProps<typeof ark.button>;
export type ActionBarContentProps = ComponentProps<typeof ark.div>;
export type ActionBarSeparatorProps = SeparatorProps;
export type ActionBarCloseProps = ComponentProps<typeof ark.button>;

export interface ActionBarValueProps extends BadgeProps {
  count: number;
  label?: string;
}

export type ActionBarBodyProps = ComponentProps<typeof ark.div>;

const defaultPositioning = { gutter: "16px", placement: "bottom" as const };

export function ActionBarRoot(props: ParentProps<ActionBarProps>): JSX.Element {
  const [local] = splitProps(props, [
    "closeOnEscape",
    "count",
    "defaultOpen",
    "lazyMount",
    "open",
    "positioning",
    "unmountOnExit",
    "actions",
    "children",
    "onOpenChange",
    "recipe",
  ]);

  const [uncontrolledOpen, setUncontrolledOpen] = createSignal(local.defaultOpen ?? false);
  const isOpen = createMemo(() => (local.open !== undefined ? !!local.open : uncontrolledOpen()));
  const setOpen = (next: boolean) => {
    if (local.open === undefined) setUncontrolledOpen(next);
    local.onOpenChange?.(next);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  createEffect(() => {
    if (!isOpen() || (local.closeOnEscape ?? true) === false) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const positioning = createMemo(() => ({
    ...defaultPositioning,
    ...local.positioning,
  }));

  const slots = createMemo(() =>
    (local.recipe ?? actionBarRecipe)({
      placement: positioning().placement,
    }),
  );

  const hasPreset = () => local.count !== undefined || (local.actions && local.actions.length > 0);

  return (
    <ActionBarContext
      value={{
        isOpen,
        lazyMount: local.lazyMount,
        onClose: handleClose,
        onOpen: handleOpen,
        positioning: positioning(),
        slots: slots(),
        unmountOnExit: local.unmountOnExit,
      }}
    >
      {local.children}
      <Show when={hasPreset()}>
        <ActionBarContent>
          <Show when={local.count !== undefined}>
            <ActionBarValue count={local.count!} />
          </Show>
          <Show when={local.count !== undefined && local.actions}>
            <ActionBarSeparator />
          </Show>
          <Show when={local.actions}>
            <ActionBarBody>
              <For each={local.actions}>
                {(action) => (
                  <Button
                    disabled={action.disabled}
                    onClick={action.onClick}
                    size="sm"
                    variant="ghost"
                  >
                    {action.icon}
                    {action.label}
                  </Button>
                )}
              </For>
            </ActionBarBody>
          </Show>
          <Show when={local.actions}>
            <ActionBarSeparator />
          </Show>
          <ActionBarClose>
            <XIcon aria-hidden />
          </ActionBarClose>
        </ActionBarContent>
      </Show>
    </ActionBarContext>
  );
}

export function ActionBarTrigger(props: ActionBarTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick"]);
  const { onOpen, isOpen } = useActionBar();

  return (
    <ark.button
      {...rest}
      aria-expanded={isOpen()}
      data-part="trigger"
      data-scope="action-bar"
      data-state={isOpen() ? "open" : "closed"}
      onClick={(event) => {
        onOpen();
        if (typeof local.onClick === "function") local.onClick(event);
      }}
      type="button"
    />
  );
}

export function ActionBarContent(props: ActionBarContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "aria-labelledby"]);
  const { isOpen, lazyMount, unmountOnExit, positioning, slots } = useActionBar();
  const placement = () => positioning.placement;
  const gutter = () => positioning.gutter;

  return (
    <Portal>
      <Presence
        asChild={(presenceProps) => (
          <ark.div
            {...presenceProps({
              class: slots.positioner({ placement: placement() }),
            })}
            data-part="positioner"
            data-placement={placement()}
            data-scope="action-bar"
            style={{ "--gutter": gutter() }}
          >
            <ark.div
              {...rest}
              aria-labelledby={local["aria-labelledby"]}
              class={slots.content({ class: cn(local.class) })}
              data-part="content"
              data-scope="action-bar"
              role="toolbar"
            />
          </ark.div>
        )}
        lazyMount={lazyMount}
        present={isOpen()}
        unmountOnExit={unmountOnExit}
      />
    </Portal>
  );
}

export function ActionBarSeparator(props: ActionBarSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useActionBar();

  return (
    <Separator
      {...rest}
      class={slots.separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="action-bar"
      orientation="vertical"
    />
  );
}

export function ActionBarClose(props: ActionBarCloseProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick", "class", "children"]);
  const { onClose, isOpen, slots } = useActionBar();

  return (
    <ark.button
      {...rest}
      aria-label="Close"
      class={slots.close({ class: cn(local.class) })}
      data-part="close"
      data-scope="action-bar"
      data-state={isOpen() ? "open" : "closed"}
      onClick={(event) => {
        onClose();
        if (typeof local.onClick === "function") local.onClick(event);
      }}
      type="button"
    >
      {local.children}
    </ark.button>
  );
}

export function ActionBarValue(props: ActionBarValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["count", "children", "label", "class"]);
  const { slots } = useActionBar();

  return (
    <Badge
      {...rest}
      class={slots.value({ class: cn(local.class) })}
      data-part="value"
      data-scope="action-bar"
      variant="secondary"
    >
      {local.children ?? local.label ?? local.count}
    </Badge>
  );
}

export function ActionBarBody(props: ActionBarBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useActionBar();
  return <ark.div {...rest} class={slots.body({ class: cn(local.class) })} />;
}
