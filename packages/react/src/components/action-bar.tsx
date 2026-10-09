import { Portal, useHotkey } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Presence } from "@ark-ui/react/presence";
import { useUncontrolled } from "@mantine/hooks";
import { XIcon } from "@phosphor-icons/react";
import type { ActionBarProps as BaseActionBarProps } from "@pisagor/props";
import { actionBarRecipe } from "@pisagor/recipes";
import type {
  ComponentProps,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
} from "react";
import { createContext, use, useCallback, useMemo } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const {
  Context: ActionBarStylesContext,
  useStyles: useActionBarStyles,
  withContext,
} = createSlotRecipeContext({
  name: "ActionBar",
  recipe: actionBarRecipe,
});

interface ActionBarPositioning {
  /**
   * The gutter from the edge in pixels.
   *
   * @defaultValue '16px'
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
  return { ...useActionBarStyles(), ...useActionBarState() };
}
// #endregion

// #region Types
interface ActionBarActionItem {
  /** Icon rendered before the label */
  icon?: ReactNode;
  /** Button label */
  label: string;
  /** Called when the button is clicked */
  onClick: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
}

export interface ActionBarProps
  extends Pick<ActionBarStateValue, "lazyMount" | "unmountOnExit">,
    BaseActionBarProps {
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
   * Ignored when `open` is set.
   */
  defaultOpen?: boolean;
  /**
   * The open state of the action bar.
   *
   * @remarks
   * When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle updates.
   */
  open?: boolean;
  /** Placement and gutter of the action bar. */
  positioning?: ActionBarStateValue["positioning"];
  /** Action buttons rendered inside the auto-generated ActionBar.Content */
  actions?: ActionBarActionItem[];
  /** Number of selected items rendered via ActionBar.Value */
  count?: number;
  /** The function to call when the open state of the action bar changes. */
  onOpenChange?: (open: boolean) => void;
}

export type ActionBarTriggerProps = ComponentProps<typeof ark.button>;

export type ActionBarContentProps = ComponentProps<typeof ark.div>;

export type ActionBarSeparatorProps = SeparatorProps;

export type ActionBarCloseProps = ComponentProps<typeof ark.button>;

export interface ActionBarValueProps extends BadgeProps {
  /** The number of items selected */
  count: number;
  /** The label of the selection trigger */
  label?: string;
}

export type ActionBarBodyProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Constants
const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;
// #endregion

// #region Parts
export function ActionBarRoot({
  closeOnEscape = true,
  count,
  defaultOpen = false,
  lazyMount,
  open,
  positioning: positioningProp,
  unmountOnExit,
  actions,
  children,
  onOpenChange,
  recipe = actionBarRecipe,
}: PropsWithChildren<ActionBarProps>) {
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

  const hasPreset = count !== undefined || (actions && actions.length > 0);

  return (
    <ActionBarStylesContext
      value={{
        slots,
        variants: { placement: positioning.placement } as never,
      }}
    >
      <ActionBarStateContext value={state}>
        {children}
        {hasPreset && (
          <ActionBarContent>
            {count !== undefined && <ActionBarValue count={count} />}
            {count !== undefined && actions && <ActionBarSeparator />}
            {actions && (
              <ActionBarBody>
                {actions.map((action) => (
                  <Button
                    disabled={action.disabled}
                    key={action.label}
                    onClick={action.onClick}
                    size="sm"
                    variant="ghost"
                  >
                    {action.icon}
                    {action.label}
                  </Button>
                ))}
              </ActionBarBody>
            )}
            {actions && <ActionBarSeparator />}
            <ActionBarClose>
              <XIcon aria-hidden />
            </ActionBarClose>
          </ActionBarContent>
        )}
      </ActionBarStateContext>
    </ActionBarStylesContext>
  );
}

export function ActionBarTrigger({ onClick, ...rest }: ActionBarTriggerProps) {
  const { onOpen, isOpen } = useActionBarState();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onOpen?.();
    onClick?.(event);
  };

  return (
    <ark.button
      {...rest}
      aria-expanded={isOpen}
      data-part="trigger"
      data-scope="action-bar"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
    />
  );
}

export function ActionBarContent({
  "aria-labelledby": ariaLabelledby,
  className,
  ...rest
}: ActionBarContentProps) {
  const { isOpen, lazyMount, unmountOnExit, positioning, slots } =
    useActionBar();

  const placement = positioning.placement;
  const gutter = positioning.gutter;

  return (
    <Portal>
      <Presence
        asChild
        lazyMount={lazyMount}
        present={isOpen}
        unmountOnExit={unmountOnExit}
      >
        <ark.div
          className={slots.positioner({ placement })}
          data-part="positioner"
          data-placement={placement}
          data-scope="action-bar"
          style={{ "--gutter": gutter }}
        >
          <ark.div
            {...rest}
            aria-labelledby={ariaLabelledby}
            className={slots.content({ className })}
            data-part="content"
            data-scope="action-bar"
            role="toolbar"
          />
        </ark.div>
      </Presence>
    </Portal>
  );
}

export function ActionBarSeparator({
  className,
  ...rest
}: ActionBarSeparatorProps) {
  const { slots } = useActionBarStyles();

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
  const { onClose, isOpen, slots } = useActionBar();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClose?.();
    onClick?.(event);
  };

  return (
    <ark.button
      {...rest}
      aria-label="Close"
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
  const { slots } = useActionBarStyles();

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

export const ActionBarBody = withContext(ark.div, {
  name: "Body",
});
// #endregion

// #region Display Names
ActionBarRoot.displayName = "ActionBar";
ActionBarTrigger.displayName = "ActionBar.Trigger";
ActionBarContent.displayName = "ActionBar.Content";
ActionBarSeparator.displayName = "ActionBar.Separator";
ActionBarClose.displayName = "ActionBar.Close";
ActionBarValue.displayName = "ActionBar.Value";
// #endregion

export const ActionBar = Object.assign(ActionBarRoot, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
