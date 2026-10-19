import { Dialog as AlertDialogPrimitive, Portal } from "@ark-ui/react";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps as DialogContentPrimitiveProps,
  DialogPositionerProps as DialogPositionerPrimitiveProps,
  DialogRootProps as DialogRootPrimitiveProps,
  DialogTriggerProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type {
  AlertDialogContract,
  AlertDialogHeaderContract,
  AlertDialogRootContract,
} from "@pisagor/contracts";
import {
  type AlertDialogVariantProps,
  alertDialogRecipe,
} from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createContext, use } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { Context, useStyles, withContext } = createSlotRecipeContext({
  name: "AlertDialog",
  recipe: alertDialogRecipe,
});

const AlertDialogModalContext = createContext<boolean>(true);
AlertDialogModalContext.displayName = "AlertDialogModalContext";
// #endregion

// #region Types
export interface AlertDialogRootProps
  extends DialogRootPrimitiveProps, AlertDialogRootContract {}

export interface AlertDialogContentProps
  extends DialogContentPrimitiveProps, AlertDialogVariantProps {
  /**
   * Whether to stick the dialog to the bottom of the screen on mobile.
   *
   * @defaultValue true
   */
  bottomStickOnMobile?: boolean;
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
}

export interface AlertDialogBodyProps extends ComponentPropsWithRef<"div"> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export interface AlertDialogHeaderProps
  extends
    Omit<ComponentPropsWithRef<"div">, "title">,
    AlertDialogHeaderContract {
  description?: ReactNode;
  title?: ReactNode;
}

export interface AlertDialogPositionerProps extends DialogPositionerPrimitiveProps {
  bottomStickOnMobile?: boolean;
}

export type AlertDialogFooterProps = ComponentPropsWithRef<"div">;

export interface AlertDialogActionProps
  extends DialogCloseTriggerProps, Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export interface AlertDialogCancelProps
  extends DialogCloseTriggerProps, Omit<ButtonProps, "variant"> {}

export interface AlertDialogProps
  extends
    Omit<AlertDialogRootProps, "children" | "title">,
    AlertDialogContract {
  actions?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
  trigger?: ReactNode;
}
// #endregion

// #region Parts
export function AlertDialogRoot({
  modal = true,
  recipe = alertDialogRecipe,
  role = "alertdialog",
  ...rest
}: AlertDialogRootProps) {
  const slots = recipe();

  return (
    <Context value={{ slots, variants: {} as never }}>
      <AlertDialogModalContext value={modal}>
        <AlertDialogPrimitive.Root {...rest} modal={modal} role={role} />
      </AlertDialogModalContext>
    </Context>
  );
}

export function AlertDialogTrigger(props: DialogTriggerProps) {
  return <AlertDialogPrimitive.Trigger {...props} />;
}

export function AlertDialogBackdrop({
  className,
  ...rest
}: DialogBackdropProps) {
  const modal = use(AlertDialogModalContext);
  const { slots } = useStyles();

  if (!modal) {
    return null;
  }

  return (
    <AlertDialogPrimitive.Backdrop
      {...rest}
      className={slots.backdrop({ className })}
    />
  );
}

export function AlertDialogPositioner({
  bottomStickOnMobile,
  className,
  ...rest
}: AlertDialogPositionerProps) {
  const { slots } = useStyles();

  return (
    <AlertDialogPrimitive.Positioner
      {...rest}
      className={slots.positioner({ bottomStickOnMobile, className })}
    />
  );
}

export function AlertDialogContent({
  size = "md",
  bottomStickOnMobile = true,
  showCloseButton = false,
  children,
  className,
  ...rest
}: AlertDialogContentProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <Portal>
      <AlertDialogBackdrop />

      <AlertDialogPositioner bottomStickOnMobile={bottomStickOnMobile}>
        <AlertDialogPrimitive.Content
          {...rest}
          className={slots.content({ bottomStickOnMobile, className, size })}
        >
          {children}

          {!!showCloseButton && (
            <AlertDialogCloseTrigger asChild>
              <Button
                aria-label={m("dialog.close")}
                className={slots.inline()}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </AlertDialogCloseTrigger>
          )}
        </AlertDialogPrimitive.Content>
      </AlertDialogPositioner>
    </Portal>
  );
}

export function AlertDialogBody({
  scrollFade = false,
  className,
  ...rest
}: AlertDialogBodyProps) {
  const { slots } = useStyles();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <div
        {...rest}
        className={slots.body({ className })}
        data-part="body"
        data-scope="alert-dialog"
      />
    </ScrollArea>
  );
}

export function AlertDialogHeader({
  children,
  className,
  description,
  title,
  ...rest
}: AlertDialogHeaderProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="alert-dialog"
    >
      {title != null && <AlertDialogTitle>{title}</AlertDialogTitle>}

      {description != null && (
        <AlertDialogDescription>{description}</AlertDialogDescription>
      )}

      {children}
    </div>
  );
}

export const AlertDialogTitle = withContext(AlertDialogPrimitive.Title, {
  name: "Title",
});

export const AlertDialogDescription = withContext(
  AlertDialogPrimitive.Description,
  { name: "Description" },
);

export function AlertDialogCloseTrigger(props: DialogCloseTriggerProps) {
  return <AlertDialogPrimitive.CloseTrigger {...props} />;
}

export function AlertDialogFooter({
  className,
  ...rest
}: AlertDialogFooterProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="alert-dialog"
    />
  );
}

export function AlertDialogAction({
  variant = "default",
  ...rest
}: AlertDialogActionProps) {
  return (
    <AlertDialogCloseTrigger asChild>
      <Button {...rest} variant={variant} />
    </AlertDialogCloseTrigger>
  );
}

export function AlertDialogCancel(props: AlertDialogCancelProps) {
  return (
    <AlertDialogCloseTrigger asChild>
      <Button {...props} variant="outline" />
    </AlertDialogCloseTrigger>
  );
}
// #endregion

// #region Shorthand
export function AlertDialogShorthand({
  actions,
  description,
  title,
  trigger,
  ...rest
}: AlertDialogProps) {
  return (
    <AlertDialogRoot {...rest}>
      {trigger !== undefined && (
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      )}

      <AlertDialogContent>
        {(title !== undefined || description !== undefined) && (
          <AlertDialogHeader>
            {title !== undefined && (
              <AlertDialogTitle>{title}</AlertDialogTitle>
            )}

            {description !== undefined && (
              <AlertDialogDescription>{description}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
        )}

        {actions !== undefined && (
          <AlertDialogFooter>{actions}</AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
// #endregion

// #region Display Names
AlertDialogRoot.displayName = "AlertDialog.Root";
AlertDialogTrigger.displayName = "AlertDialog.Trigger";
AlertDialogBackdrop.displayName = "AlertDialog.Backdrop";
AlertDialogPositioner.displayName = "AlertDialog.Positioner";
AlertDialogContent.displayName = "AlertDialog.Content";
AlertDialogBody.displayName = "AlertDialog.Body";
AlertDialogHeader.displayName = "AlertDialog.Header";
AlertDialogCloseTrigger.displayName = "AlertDialog.CloseTrigger";
AlertDialogFooter.displayName = "AlertDialog.Footer";
AlertDialogAction.displayName = "AlertDialog.Action";
AlertDialogCancel.displayName = "AlertDialog.Cancel";
AlertDialogShorthand.displayName = "AlertDialog";
// #endregion

export type {
  DialogBackdropProps as AlertDialogBackdropProps,
  DialogCloseTriggerProps as AlertDialogCloseTriggerProps,
  DialogDescriptionProps as AlertDialogDescriptionProps,
  DialogTitleProps as AlertDialogTitleProps,
  DialogTriggerProps as AlertDialogTriggerProps,
} from "@ark-ui/react";

export const AlertDialog = Object.assign(AlertDialogShorthand, {
  Action: AlertDialogAction,
  Backdrop: AlertDialogBackdrop,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  CloseTrigger: AlertDialogCloseTrigger,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Positioner: AlertDialogPositioner,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
