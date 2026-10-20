import { ark, type HTMLArkProps, Presence } from "@ark-ui/solid";
import type {
  ActionBarActionItem as BaseActionBarActionItem,
  ActionBarRootContract,
  ActionBarContract,
  ActionBarValueContract,
} from "@pisagor/contracts";
import { actionBarRecipe } from "@pisagor/recipes";
import type { Accessor, Component, JSX } from "solid-js";
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
import { XIcon, createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { type DialogTriggerRender, renderTrigger } from "./dialog";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({ name: "ActionBar", recipe: actionBarRecipe });

interface ActionBarPositioning {
  /**
   * The gutter from the edge in pixels.
   *
   * @defaultValue "16px"
   */
  gutter?: string;
  /**
   * The placement of the action bar.
   *
   * @defaultValue "bottom"
   */
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

// #region Types
interface ActionBarActionItem extends Omit<
  BaseActionBarActionItem,
  "icon" | "label"
> {
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
}

export interface ActionBarRootProps
  extends
    Pick<ActionBarState, "lazyMount" | "unmountOnExit">,
    ActionBarRootContract {
  children?: JSX.Element;
  /**
   * Whether to close the action bar when the Escape key is pressed.
   *
   * @defaultValue true
   */
  closeOnEscape?: boolean;
  /**
   * The default open state of the action bar.
   *
   * @remarks
   *   Ignored when `open` is set.
   */
  defaultOpen?: boolean;
  /**
   * The open state of the action bar.
   *
   * @remarks
   *   When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle
   *   updates.
   */
  open?: boolean;
  /** Placement and gutter of the action bar. */
  positioning?: ActionBarPositioning;
  /** The function to call when the open state of the action bar changes. */
  onOpenChange?: (open: boolean) => void;
}

export interface ActionBarProps
  extends Omit<ActionBarRootProps, "children">, ActionBarContract {
  /** Action buttons built from data, rendered in the body. */
  actions?: ActionBarActionItem[];
  /** Extra toolbar content, rendered in the body after `actions`. */
  children?: JSX.Element;
  /** Selected item count shown at the start of the bar. */
  count?: number;
  /**
   * Whether to show the close button.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Element that opens the bar (render fn preferred). */
  trigger?: DialogTriggerRender;
}

export type ActionBarTriggerProps = HTMLArkProps<"button">;

export type ActionBarPositionerProps = HTMLArkProps<"div">;

export type ActionBarContentProps = HTMLArkProps<"div">;

export type ActionBarSeparatorProps = SeparatorProps;

export type ActionBarCloseProps = HTMLArkProps<"button">;

export interface ActionBarValueProps
  extends BadgeProps, ActionBarValueContract {
  count: number;
  label?: string;
}

export type ActionBarBodyProps = HTMLArkProps<"div">;
// #endregion

// #region Constants
const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;
// #endregion

// #region Parts
export function ActionBarRoot(props: ActionBarRootProps): JSX.Element {
  const [uncontrolledOpen, setUncontrolledOpen] = createSignal(
    props.defaultOpen ?? false,
  );
  const isOpen = createMemo(() =>
    props.open !== undefined ? props.open : uncontrolledOpen(),
  );
  const setOpen = (next: boolean) => {
    if (props.open === undefined) {
      setUncontrolledOpen(next);
    }
    props.onOpenChange?.(next);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  createEffect(() => {
    if (!isOpen() || (props.closeOnEscape ?? true) === false) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.key !== "Escape") {
        return;
      }

      handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const positioning = createMemo(() => ({
    ...defaultPositioning,
    ...props.positioning,
  }));

  const slots = createMemo(() =>
    (props.recipe ?? actionBarRecipe)({
      placement: positioning().placement,
    }),
  );

  return (
    <ActionBarStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return { placement: positioning().placement } as never;
        },
      }}
    >
      <ActionBarStateContext
        value={{
          isOpen,
          get lazyMount() {
            return props.lazyMount;
          },
          onClose: handleClose,
          onOpen: handleOpen,
          get positioning() {
            return positioning();
          },
          get unmountOnExit() {
            return props.unmountOnExit;
          },
        }}
      >
        {props.children}
      </ActionBarStateContext>
    </ActionBarStylesContext>
  );
}

export function ActionBarTrigger(props: ActionBarTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "onClick"]);
  const styles = useStyles();
  const state = useActionBarState();

  return (
    <ark.button
      {...rest}
      aria-expanded={state.isOpen()}
      class={styles.slots.trigger({ class: local.class })}
      data-part="trigger"
      data-scope="action-bar"
      data-state={state.isOpen() ? "open" : "closed"}
      onClick={(event) => {
        state.onOpen();
        if (typeof local.onClick === "function") {
          local.onClick(event);
        }
      }}
      type="button"
    />
  );
}

export function ActionBarPositioner(
  props: ActionBarPositionerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "style"]);
  const styles = useStyles();
  const state = useActionBarState();

  return (
    <Presence
      asChild={(presenceProps) => (
        <ark.div
          {...presenceProps(rest)}
          class={styles.slots.positioner({ class: local.class })}
          data-part="positioner"
          data-placement={state.positioning.placement}
          data-scope="action-bar"
          style={{
            "--gutter": state.positioning.gutter,
            ...(typeof local.style === "object" ? local.style : {}),
          }}
        />
      )}
      lazyMount={state.lazyMount}
      present={state.isOpen()}
      unmountOnExit={state.unmountOnExit}
    />
  );
}

export function ActionBarContent(props: ActionBarContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ark.div
      role="toolbar"
      {...rest}
      class={styles.slots.content({ class: local.class })}
      data-part="content"
      data-scope="action-bar"
    />
  );
}

export function ActionBarSeparator(
  props: ActionBarSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

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
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["onClick", "class"]);
  const styles = useStyles();
  const state = useActionBarState();

  return (
    <ark.button
      aria-label={m("actionBar.close")}
      {...rest}
      class={styles.slots.close({ class: local.class })}
      data-part="close"
      data-scope="action-bar"
      data-state={state.isOpen() ? "open" : "closed"}
      onClick={(event) => {
        state.onClose();
        if (typeof local.onClick === "function") {
          local.onClick(event);
        }
      }}
      type="button"
    />
  );
}

export function ActionBarValue(props: ActionBarValueProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "count",
    "children",
    "label",
    "class",
  ]);
  const styles = useStyles();

  return (
    <Badge
      {...rest}
      class={styles.slots.value({ class: local.class })}
      data-part="value"
      data-scope="action-bar"
      variant="secondary"
    >
      {local.children ?? local.label ?? local.count ?? 0}
    </Badge>
  );
}

export const ActionBarBody: Component<ActionBarBodyProps> =
  withContext<ActionBarBodyProps>("div", { name: "Body" });
// #endregion

// #region Shorthand
export function ActionBarShorthand(props: ActionBarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "classNames",
    "count",
    "showCloseButton",
    "trigger",
  ]);
  const hasActions = () =>
    local.actions !== undefined && local.actions.length > 0;
  const hasBody = () => hasActions() || local.children !== undefined;
  const showClose = () => local.showCloseButton ?? true;

  return (
    <ActionBarRoot {...rest}>
      <Show when={local.trigger !== undefined}>
        <ActionBarTrigger
          asChild={renderTrigger(local.trigger)}
          class={local.classNames?.trigger}
        />
      </Show>

      <Portal>
        <ActionBarPositioner class={local.classNames?.positioner}>
          <ActionBarContent class={local.classNames?.content}>
            <Show when={local.count !== undefined}>
              <ActionBarValue
                class={local.classNames?.value}
                count={local.count ?? 0}
              />
            </Show>

            <Show when={local.count !== undefined && hasBody()}>
              <ActionBarSeparator class={local.classNames?.separator} />
            </Show>

            <Show when={hasBody()}>
              <ActionBarBody class={local.classNames?.body}>
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

                {local.children}
              </ActionBarBody>
            </Show>

            <Show when={showClose() && hasBody()}>
              <ActionBarSeparator class={local.classNames?.separator} />
            </Show>

            <Show when={showClose()}>
              <ActionBarClose class={local.classNames?.close}>
                <XIcon aria-hidden />
              </ActionBarClose>
            </Show>
          </ActionBarContent>
        </ActionBarPositioner>
      </Portal>
    </ActionBarRoot>
  );
}
// #endregion

export const ActionBar = Object.assign(ActionBarShorthand, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Positioner: ActionBarPositioner,
  Root: ActionBarRoot,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
