import {
  ark,
  Portal,
  Presence,
  useHotkey,
  type HTMLArkProps,
} from "@ark-ui/react";
import { useUncontrolled } from "@mantine/hooks";
import { XIcon } from "@phosphor-icons/react";
import type {
  ActionBarActionItem as BaseActionBarActionItem,
  ActionBarRootContract,
  ActionBarContract,
  ActionBarValueContract,
} from "@pisagor/contracts";
import { actionBarRecipe } from "@pisagor/recipes";
import type { ComponentProps, MouseEvent, ReactNode } from "react";
import { createContext, use, useCallback, useMemo } from "react";
import { createSlotRecipeContext } from "../internal";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "ActionBar",
  recipe: actionBarRecipe,
});

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

interface ActionBarStateValue {
  /** The open state of the action bar */
  isOpen?: boolean;
  /** Whether to lazy mount the action bar */
  lazyMount?: boolean;
  /** The function to call when the action bar is closed */
  onClose?: () => void;
  /** The function to call when the action bar is opened */
  onOpen?: () => void;
  /** The positioning of the action bar. */
  positioning: ActionBarPositioning;
  /** Whether to unmount on exit */
  unmountOnExit?: boolean;
}

const ActionBarStateContext = createContext<ActionBarStateValue | undefined>(
  undefined,
);

function useActionBarState() {
  const state = use(ActionBarStateContext);
  if (state === undefined) {
    throw new Error("useActionBar must be used within ActionBarContext.");
  }

  return state;
}

function useActionBar() {
  return { ...useStyles(), ...useActionBarState() };
}
// #endregion

// #region Types
interface ActionBarActionItem extends Omit<
  BaseActionBarActionItem,
  "icon" | "label"
> {
  icon?: ReactNode;
  label: string;
  onClick: () => void;
}

export interface ActionBarRootProps
  extends
    Pick<ActionBarStateValue, "lazyMount" | "unmountOnExit">,
    ActionBarRootContract {
  children?: ReactNode;
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
  positioning?: ActionBarStateValue["positioning"];
  /** The function to call when the open state of the action bar changes. */
  onOpenChange?: (open: boolean) => void;
}

export interface ActionBarProps
  extends Omit<ActionBarRootProps, "children">, ActionBarContract {
  /** Action buttons built from data, rendered in the body. */
  actions?: ActionBarActionItem[];
  /** Extra toolbar content, rendered in the body after `actions`. */
  children?: ReactNode;
  /** Selected item count shown at the start of the bar. */
  count?: number;
  /**
   * Whether to show the close button.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Element that opens the bar. */
  trigger?: ReactNode;
}

export type ActionBarTriggerProps = HTMLArkProps<"button">;

export type ActionBarPositionerProps = ComponentProps<"div">;

export type ActionBarContentProps = ComponentProps<"div">;

export type ActionBarSeparatorProps = SeparatorProps;

export type ActionBarCloseProps = HTMLArkProps<"button">;

export interface ActionBarValueProps
  extends BadgeProps, ActionBarValueContract {
  count: number;
  label?: string;
}

export type ActionBarBodyProps = ComponentProps<"div">;
// #endregion

// #region Constants
const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;
// #endregion

// #region Parts
export function ActionBarRoot({
  closeOnEscape = true,
  defaultOpen = false,
  lazyMount,
  open,
  positioning: positioningProp,
  unmountOnExit,
  children,
  onOpenChange,
  recipe = actionBarRecipe,
}: ActionBarRootProps) {
  const [isOpen, setOpen] = useUncontrolled({
    defaultValue: defaultOpen,
    finalValue: false,
    onChange: onOpenChange,
    value: open,
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  useHotkey({
    action: (event) => {
      if (event.defaultPrevented) {
        return;
      }

      handleClose();
    },
    enabled: isOpen && closeOnEscape,
    hotkey: "Escape",
  });

  const positioning = useMemo(
    () => ({
      ...defaultPositioning,
      ...positioningProp,
    }),
    [positioningProp],
  );

  const slots = useMemo(
    () =>
      recipe({
        placement: positioning.placement,
      }),
    [positioning.placement, recipe],
  );

  const state = useMemo(
    () => ({
      isOpen,
      lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning,
      unmountOnExit,
    }),
    [handleClose, handleOpen, isOpen, lazyMount, positioning, unmountOnExit],
  );

  return (
    <ActionBarStylesContext
      value={{
        slots,
        variants: { placement: positioning.placement } as never,
      }}
    >
      <ActionBarStateContext value={state}>{children}</ActionBarStateContext>
    </ActionBarStylesContext>
  );
}

export function ActionBarTrigger({
  className,
  onClick,
  ...rest
}: ActionBarTriggerProps) {
  const { onOpen, isOpen, slots } = useActionBar();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onOpen?.();
    onClick?.(event);
  };

  return (
    <ark.button
      {...rest}
      aria-expanded={isOpen}
      className={slots.trigger({ className })}
      data-part="trigger"
      data-scope="action-bar"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
    />
  );
}

export function ActionBarPositioner({
  className,
  style,
  ...rest
}: ActionBarPositionerProps) {
  const { isOpen, lazyMount, unmountOnExit, positioning, slots } =
    useActionBar();

  return (
    <Presence
      asChild
      lazyMount={lazyMount}
      present={isOpen}
      unmountOnExit={unmountOnExit}
    >
      <div
        {...rest}
        className={slots.positioner({ className })}
        data-part="positioner"
        data-placement={positioning.placement}
        data-scope="action-bar"
        style={{ "--gutter": positioning.gutter, ...style }}
      />
    </Presence>
  );
}

export function ActionBarContent({
  className,
  ...rest
}: ActionBarContentProps) {
  const { slots } = useStyles();

  return (
    <div
      role="toolbar"
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="action-bar"
    />
  );
}

export function ActionBarSeparator({
  className,
  ...rest
}: ActionBarSeparatorProps) {
  const { slots } = useStyles();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="action-bar"
      orientation="vertical"
    />
  );
}

export function ActionBarClose({
  onClick,
  className,
  ...rest
}: ActionBarCloseProps) {
  const { m } = useLocale();
  const { onClose, isOpen, slots } = useActionBar();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClose?.();
    onClick?.(event);
  };

  return (
    <ark.button
      aria-label={m("actionBar.close")}
      {...rest}
      className={slots.close({ className })}
      data-part="close"
      data-scope="action-bar"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
    />
  );
}

export function ActionBarValue({
  count = 0,
  children,
  label,
  className,
  ...rest
}: ActionBarValueProps) {
  const { slots } = useStyles();

  return (
    <Badge
      {...rest}
      className={slots.value({ className })}
      data-part="value"
      data-scope="action-bar"
      variant="secondary"
    >
      {children ?? label ?? count}
    </Badge>
  );
}

export const ActionBarBody = withContext<ComponentProps<"div">>("div", {
  name: "Body",
});
// #endregion

// #region Shorthand
export function ActionBarShorthand({
  actions,
  children,
  classNames,
  count,
  showCloseButton = true,
  trigger,
  ...rest
}: ActionBarProps) {
  const hasActions = actions !== undefined && actions.length > 0;
  const hasBody = hasActions || children !== undefined;

  return (
    <ActionBarRoot {...rest}>
      {trigger !== undefined && (
        <ActionBarTrigger asChild className={classNames?.trigger}>
          {trigger}
        </ActionBarTrigger>
      )}

      <Portal>
        <ActionBarPositioner className={classNames?.positioner}>
          <ActionBarContent className={classNames?.content}>
            {count !== undefined && (
              <ActionBarValue className={classNames?.value} count={count} />
            )}

            {count !== undefined && hasBody && (
              <ActionBarSeparator className={classNames?.separator} />
            )}

            {hasBody && (
              <ActionBarBody className={classNames?.body}>
                {actions?.map((action) => (
                  <Button
                    disabled={action.disabled}
                    key={action.id ?? action.label}
                    onClick={action.onClick}
                    size="sm"
                    variant="ghost"
                  >
                    {action.icon}
                    {action.label}
                  </Button>
                ))}

                {children}
              </ActionBarBody>
            )}

            {showCloseButton && hasBody && (
              <ActionBarSeparator className={classNames?.separator} />
            )}

            {showCloseButton && (
              <ActionBarClose className={classNames?.close}>
                <XIcon aria-hidden />
              </ActionBarClose>
            )}
          </ActionBarContent>
        </ActionBarPositioner>
      </Portal>
    </ActionBarRoot>
  );
}
// #endregion

// #region Display Names
ActionBarRoot.displayName = "ActionBar.Root";
ActionBarTrigger.displayName = "ActionBar.Trigger";
ActionBarPositioner.displayName = "ActionBar.Positioner";
ActionBarContent.displayName = "ActionBar.Content";
ActionBarSeparator.displayName = "ActionBar.Separator";
ActionBarClose.displayName = "ActionBar.Close";
ActionBarValue.displayName = "ActionBar.Value";
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
