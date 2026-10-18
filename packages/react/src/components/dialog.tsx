import { Dialog as DialogPrimitive, Portal, ark } from "@ark-ui/react";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps as DialogPrimitiveContentProps,
  DialogPositionerProps as DialogPrimitivePositionerProps,
  DialogRootProps as DialogPrimitiveRootProps,
  DialogTriggerProps,
  HTMLArkProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type { DialogProps as BaseDialogRootProps } from "@pisagor/props";
import { type DialogVariantProps, dialogRecipe } from "@pisagor/recipes";
import type { ReactNode, RefAttributes } from "react";
import { createContext, use } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DialogStylesContext,
  useStyles: useDialog,
  withContext,
} = createSlotRecipeContext({
  name: "Dialog",
  recipe: dialogRecipe,
});

const DialogModalContext = createContext<boolean>(true);
DialogModalContext.displayName = "DialogModalContext";

export { useDialog };
// #endregion

// #region Types
export interface DialogRootProps
  extends DialogPrimitiveRootProps, BaseDialogRootProps {}

export interface DialogContentProps
  extends DialogPrimitiveContentProps, DialogVariantProps {
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

export interface DialogBodyProps
  extends HTMLArkProps<"div">, RefAttributes<HTMLDivElement> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export type DialogHeaderProps = HTMLArkProps<"div"> &
  RefAttributes<HTMLDivElement>;

export interface DialogPositionerProps extends DialogPrimitivePositionerProps {
  bottomStickOnMobile?: boolean;
}

export type DialogFooterProps = HTMLArkProps<"div"> &
  RefAttributes<HTMLDivElement>;

export interface DialogProps extends Omit<DialogRootProps, "title"> {
  /** Footer actions. */
  actions?: ReactNode;
  /** Header description content. */
  description?: ReactNode;
  /** Header title content. */
  title?: ReactNode;
  /** Control that opens the dialog. */
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
  const { slots } = useDialog();

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
  const { slots } = useDialog();

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
  const { slots } = useDialog();

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
  const { slots } = useDialog();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
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
  ...rest
}: DialogHeaderProps) {
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="dialog"
    >
      {children}
    </ark.div>
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
  const { slots } = useDialog();

  return (
    <ark.div
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
