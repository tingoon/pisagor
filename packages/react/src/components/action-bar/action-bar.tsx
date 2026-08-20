import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Presence } from "@ark-ui/react/presence";
import { XIcon } from "@phosphor-icons/react";
import {
  actionBarCloseVariants,
  actionBarContentVariants,
  actionBarInlineVariants,
  actionBarPositionerVariants,
  actionBarSeparatorVariants,
  actionBarValueVariants,
} from "@pisagor/styles/ui/action-bar";
import { useHotkey } from "@tanstack/react-hotkeys";
import type { ComponentProps, MouseEvent, PropsWithChildren, ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import type { WithTestId } from "../../internal/types";
import { Badge, type BadgeProps } from "../badge";
import { Button } from "../button";
import { Separator, type SeparatorProps } from "../separator";
import { ActionBarContext, type ActionBarContextValue, useActionBar } from "./action-bar.context";

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
  extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit">,
    WithTestId {
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
  /** The function to call when the open state of the action bar changes. */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the action bar.
   *
   * @remarks
   * When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle updates.
   */
  open?: boolean;
  /** Placement and gutter of the action bar. */
  positioning?: ActionBarContextValue["positioning"];
  /** Number of selected items rendered via ActionBar.Value */
  count?: number;
  /** Action buttons rendered inside the auto-generated ActionBar.Content */
  actions?: ActionBarActionItem[];
}

export interface ActionBarTriggerProps extends ComponentProps<typeof ark.button> {}

export interface ActionBarContentProps extends ComponentProps<typeof ark.div> {}

export interface ActionBarSeparatorProps extends SeparatorProps {}

export interface ActionBarCloseProps extends ComponentProps<typeof ark.button> {}

export interface ActionBarValueProps extends BadgeProps {
  /** The number of items selected */
  count: number;
  /** The label of the selection trigger */
  label?: string;
}
// #endregion

// #region Constants
const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;
// #endregion

// #region Parts
export function ActionBarRoot({
  open,
  defaultOpen = false,
  closeOnEscape = true,
  positioning,
  lazyMount = true,
  unmountOnExit = true,
  onOpenChange,
  count,
  actions,
  children,
  testId,
}: PropsWithChildren<ActionBarProps>) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false);
    }

    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const handleOpen = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(true);
    }

    onOpenChange?.(true);
  }, [isControlled, onOpenChange]);

  useHotkey(
    "Escape",
    (event) => {
      if (event.defaultPrevented) {
        return;
      }

      handleClose();
    },
    { enabled: isOpen && closeOnEscape },
  );

  const context = useMemo(
    () => ({
      isOpen,
      lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning: { ...defaultPositioning, ...positioning },
      testId,
      unmountOnExit,
    }),
    [handleClose, handleOpen, isOpen, lazyMount, testId, unmountOnExit, positioning],
  );

  const hasPreset = count !== undefined || (actions && actions.length > 0);

  return (
    <ActionBarContext value={context}>
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
    </ActionBarContext>
  );
}

export function ActionBarTrigger({ onClick, ...rest }: ActionBarTriggerProps) {
  const { onOpen, isOpen } = useActionBar();

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
  const { isOpen, lazyMount, unmountOnExit, positioning, testId } = useActionBar();

  const placement = positioning.placement;
  const gutter = positioning.gutter;

  return (
    <Portal>
      <Presence asChild lazyMount={lazyMount} present={isOpen} unmountOnExit={unmountOnExit}>
        <ark.div
          className={actionBarPositionerVariants({ placement })}
          data-part="positioner"
          data-placement={placement}
          data-scope="action-bar"
          style={{ "--gutter": gutter }}
        >
          <ark.div
            {...rest}
            aria-labelledby={ariaLabelledby}
            className={actionBarContentVariants({ className })}
            data-part="content"
            data-scope="action-bar"
            data-testid={testId}
            role="toolbar"
          />
        </ark.div>
      </Presence>
    </Portal>
  );
}

export function ActionBarSeparator({ className, ...rest }: ActionBarSeparatorProps) {
  return (
    <Separator
      {...rest}
      className={actionBarSeparatorVariants({ className })}
      dataPart="separator"
      dataScope="action-bar"
      orientation="vertical"
    />
  );
}

export function ActionBarClose({ className, onClick, ...rest }: ActionBarCloseProps) {
  const { onClose, isOpen } = useActionBar();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClose?.();
    onClick?.(event);
  };

  return (
    <ark.button
      {...rest}
      aria-label="Close"
      className={actionBarCloseVariants({ className })}
      data-part="close"
      data-scope="action-bar"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
    />
  );
}

export function ActionBarValue({
  label,
  count = 0,
  className,
  children,
  ...rest
}: ActionBarValueProps) {
  return (
    <Badge
      {...rest}
      className={actionBarValueVariants({ className })}
      data-part="value"
      data-scope="action-bar"
      variant="secondary"
    >
      {children ?? label ?? count}
    </Badge>
  );
}

export function ActionBarBody({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return <ark.div {...rest} className={actionBarInlineVariants({ className })} />;
}

ActionBarRoot.displayName = "ActionBar";
ActionBarTrigger.displayName = "ActionBar.Trigger";
ActionBarContent.displayName = "ActionBar.Content";
ActionBarSeparator.displayName = "ActionBar.Separator";
ActionBarClose.displayName = "ActionBar.Close";
ActionBarValue.displayName = "ActionBar.Value";
ActionBarBody.displayName = "ActionBar.Body";
// #endregion
