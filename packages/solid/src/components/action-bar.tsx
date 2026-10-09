import { ark } from "@ark-ui/solid/factory";
import { Presence } from "@ark-ui/solid/presence";
import type { ActionBarProps as BaseActionBarProps } from "@pisagor/props";
import { actionBarRecipe } from "@pisagor/recipes";
import type {
  Accessor,
  Component,
  ComponentProps,
  JSX,
  ParentProps,
} from "solid-js";
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
import { XIcon } from "../internal/icons";
import { createContext } from "../utils";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles: useActionBarStyles,
  withContext,
} = createSlotRecipeContext({ name: "ActionBar", recipe: actionBarRecipe });

interface ActionBarPositioning {
  gutter?: string;
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

/** Non-style state shared by parts (open state, presence, positioning). */
interface ActionBarState {
  readonly isOpen: Accessor<boolean>;
  readonly lazyMount?: boolean;
  readonly onClose: () => void;
  readonly onOpen: () => void;
  readonly positioning: ActionBarPositioning;
  readonly unmountOnExit?: boolean;
}

const { ActionBarStateContext, useActionBarState } =
  createContext("ActionBarState")<ActionBarState>();
// #endregion

interface ActionBarActionItem {
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ActionBarProps
  extends Pick<ActionBarState, "lazyMount" | "unmountOnExit">,
    BaseActionBarProps {
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  positioning?: ActionBarPositioning;
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

  const [uncontrolledOpen, setUncontrolledOpen] = createSignal(
    local.defaultOpen ?? false,
  );
  const isOpen = createMemo(() =>
    local.open !== undefined ? !!local.open : uncontrolledOpen(),
  );
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

  const hasPreset = () =>
    local.count !== undefined || (local.actions && local.actions.length > 0);

  return (
    <ActionBarStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return { placement: positioning().placement };
        },
      }}
    >
      <ActionBarStateContext
        value={{
          isOpen,
          get lazyMount() {
            return local.lazyMount;
          },
          onClose: handleClose,
          onOpen: handleOpen,
          get positioning() {
            return positioning();
          },
          get unmountOnExit() {
            return local.unmountOnExit;
          },
        }}
      >
        {local.children}
        <Show when={hasPreset()}>
          <ActionBarContent>
            {local.count !== undefined ? (
              <ActionBarValue count={local.count} />
            ) : null}
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
      </ActionBarStateContext>
    </ActionBarStylesContext>
  );
}

export function ActionBarTrigger(props: ActionBarTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick"]);
  const state = useActionBarState();

  return (
    <ark.button
      {...rest}
      aria-expanded={state.isOpen()}
      data-part="trigger"
      data-scope="action-bar"
      data-state={state.isOpen() ? "open" : "closed"}
      onClick={(event) => {
        state.onOpen();
        if (typeof local.onClick === "function") local.onClick(event);
      }}
      type="button"
    />
  );
}

export function ActionBarContent(props: ActionBarContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "aria-labelledby"]);
  const styles = useActionBarStyles();
  const state = useActionBarState();
  const placement = () => state.positioning.placement;
  const gutter = () => state.positioning.gutter;

  return (
    <Portal>
      <Presence
        asChild={(presenceProps) => (
          <ark.div
            {...presenceProps({
              class: styles.slots.positioner(),
            })}
            data-part="positioner"
            data-placement={placement()}
            data-scope="action-bar"
            style={{ "--gutter": gutter() }}
          >
            <ark.div
              {...rest}
              aria-labelledby={local["aria-labelledby"]}
              class={styles.slots.content({ class: local.class })}
              data-part="content"
              data-scope="action-bar"
              role="toolbar"
            />
          </ark.div>
        )}
        lazyMount={state.lazyMount}
        present={state.isOpen()}
        unmountOnExit={state.unmountOnExit}
      />
    </Portal>
  );
}

export function ActionBarSeparator(
  props: ActionBarSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useActionBarStyles();

  return (
    <Separator
      {...rest}
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="action-bar"
      orientation="vertical"
    />
  );
}

export function ActionBarClose(props: ActionBarCloseProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick", "class", "children"]);
  const styles = useActionBarStyles();
  const state = useActionBarState();

  return (
    <ark.button
      {...rest}
      aria-label="Close"
      class={styles.slots.close({ class: local.class })}
      data-part="close"
      data-scope="action-bar"
      data-state={state.isOpen() ? "open" : "closed"}
      onClick={(event) => {
        state.onClose();
        if (typeof local.onClick === "function") local.onClick(event);
      }}
      type="button"
    >
      {local.children}
    </ark.button>
  );
}

export function ActionBarValue(props: ActionBarValueProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "count",
    "children",
    "label",
    "class",
  ]);
  const styles = useActionBarStyles();

  return (
    <Badge
      {...rest}
      class={styles.slots.value({ class: local.class })}
      data-part="value"
      data-scope="action-bar"
      variant="secondary"
    >
      {local.children ?? local.label ?? local.count}
    </Badge>
  );
}

export const ActionBarBody: Component<ActionBarBodyProps> = withContext(
  ark.div,
  { name: "Body" },
);

export const ActionBar = Object.assign(ActionBarRoot, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
