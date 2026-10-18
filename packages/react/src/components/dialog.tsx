import { Dialog as DialogPrimitive, Portal } from "@ark-ui/react";
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
  DialogContract,
  DialogHeaderContract,
  DialogRootContract,
} from "@pisagor/props";
import { type DialogVariantProps, dialogRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createContext, use } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DialogStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Dialog",
  recipe: dialogRecipe,
});

const DialogModalContext = createContext<boolean>(true);
DialogModalContext.displayName = "DialogModalContext";
// #endregion

// #region Types
export interface DialogRootProps
  extends DialogRootPrimitiveProps, DialogRootContract {}

export interface DialogContentProps
  extends DialogContentPrimitiveProps, DialogVariantProps {
  /**
   * Whether to stick the dialog to the bottom of the screen on mobile.
   *
   * @defaultValue true
   */
  bottomStickOnMobile?: boolean;
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export interface DialogBodyProps extends ComponentPropsWithRef<"div"> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export interface DialogHeaderProps
  extends Omit<ComponentPropsWithRef<"div">, "title">, DialogHeaderContract {
  description?: ReactNode;
  title?: ReactNode;
}

export interface DialogPositionerProps extends DialogPositionerPrimitiveProps {
  bottomStickOnMobile?: boolean;
}

export type DialogFooterProps = ComponentPropsWithRef<"div">;

export interface DialogProps
  extends Omit<DialogRootProps, "title">, DialogContract {
  actions?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
  trigger?: ReactNode;
}
// #endregion

// #region Parts
export function DialogRoot({
  modal = true,
  recipe = dialogRecipe,
  ...rest
}: DialogRootProps) {
  const slots = recipe();

  return (
    <DialogStylesContext value={{ slots, variants: {} as never }}>
      <DialogModalContext value={modal}>
        <DialogPrimitive.Root {...rest} modal={modal} />
      </DialogModalContext>
    </DialogStylesContext>
  );
}

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogBackdrop({ className, ...rest }: DialogBackdropProps) {
  const modal = use(DialogModalContext);
  const { slots } = useStyles();

  if (!modal) {
    return null;
  }

  return (
    <DialogPrimitive.Backdrop
      {...rest}
      className={slots.backdrop({ className })}
    />
  );
}

export function DialogPositioner({
  bottomStickOnMobile,
  className,
  ...rest
}: DialogPositionerProps) {
  const { slots } = useStyles();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={slots.positioner({ bottomStickOnMobile, className })}
    />
  );
}

export function DialogContent({
  size = "md",
  bottomStickOnMobile = true,
  showCloseButton = true,
  children,
  className,
  ...rest
}: DialogContentProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <DialogPrimitive.Content
      {...rest}
      className={slots.content({ bottomStickOnMobile, className, size })}
    >
      {children}

      {!!showCloseButton && (
        <DialogCloseTrigger asChild>
          <Button
            aria-label={m("dialog.close")}
            className={slots.inline()}
            size="icon-sm"
            variant="ghost"
          >
            <XIcon />
          </Button>
        </DialogCloseTrigger>
      )}
    </DialogPrimitive.Content>
  );
}

export function DialogBody({
  scrollFade = false,
  className,
  ...rest
}: DialogBodyProps) {
  const { slots } = useStyles();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <div
        {...rest}
        className={slots.body({ className })}
        data-part="body"
        data-scope="dialog"
      />
    </ScrollArea>
  );
}

export function DialogHeader({
  children,
  className,
  description,
  title,
  ...rest
}: DialogHeaderProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="dialog"
    >
      {title != null && <DialogTitle>{title}</DialogTitle>}

      {description != null && (
        <DialogDescription>{description}</DialogDescription>
      )}

      {children}
    </div>
  );
}

export const DialogTitle = withContext(DialogPrimitive.Title, {
  name: "Title",
});

export const DialogDescription = withContext(DialogPrimitive.Description, {
  name: "Description",
});

export function DialogCloseTrigger(props: DialogCloseTriggerProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function DialogFooter({ className, ...rest }: DialogFooterProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="dialog"
    />
  );
}
// #endregion

// #region Shorthand
export function DialogShorthand({
  actions,
  children,
  description,
  title,
  trigger,
  ...rest
}: DialogProps) {
  return (
    <DialogRoot {...rest}>
      {trigger !== undefined && (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      )}

      <Portal>
        <DialogBackdrop />

        <DialogPositioner>
          <DialogContent>
            {(title !== undefined || description !== undefined) && (
              <DialogHeader>
                {title !== undefined && <DialogTitle>{title}</DialogTitle>}

                {description !== undefined && (
                  <DialogDescription>{description}</DialogDescription>
                )}
              </DialogHeader>
            )}

            {children !== undefined && <DialogBody>{children}</DialogBody>}

            {actions !== undefined && <DialogFooter>{actions}</DialogFooter>}
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
// #endregion

// #region Display Names
DialogRoot.displayName = "Dialog.Root";
DialogTrigger.displayName = "Dialog.Trigger";
DialogBackdrop.displayName = "Dialog.Backdrop";
DialogPositioner.displayName = "Dialog.Positioner";
DialogContent.displayName = "Dialog.Content";
DialogBody.displayName = "Dialog.Body";
DialogHeader.displayName = "Dialog.Header";
DialogCloseTrigger.displayName = "Dialog.CloseTrigger";
DialogFooter.displayName = "Dialog.Footer";
DialogShorthand.displayName = "Dialog";

// #endregion

export type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogDescriptionProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop: DialogBackdrop,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Positioner: DialogPositioner,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
